import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from 'bcrypt'

const generateAccessAndRefreshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        //save refresh token in MongoDB for future login
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresha and access token")
    }
}

export const registerUser = asyncHandler( async (req,res) => {
    //get user details from frontend
     const {firstName,lastName, email, password}= req.body
    //validation
    if(
     [firstName,lastName,email, password].some((field) => field?.trim() === "")
    ){
     throw new ApiError(400, "All fields are required")
    }
 
   
 
    //check if user already exists: email
    const existedUser = await User.findOne({email})
 
    if(existedUser){
     throw new ApiError(409,"User already exists.")
    }
 
 
    
 
 
     // create user object -  create entry in DB
     const user = await User.create({
        firstName,
        lastName,
         email,
         password
     })
 
     // remove password and refresh token field from response
     const createdUser = await User.findById(user._id).select(
         "-password -refreshToken"
     )
 
     //check for user creation
 
     if(!createdUser){
         throw new ApiError(500, "Something went wrong during registering the user")
     }
 
     
     //return response
 return res.status(201).json(
     new ApiResponse(200, createdUser, "User registered successfully")
 )
 
 
 })

 export const loginUser = asyncHandler(async (req,res) => {
  
    const {email,password} = req.body 
    if(!(email)){
        throw new ApiError(400, "email is required")
    }

    //find the user
    const user = await User.findOne({
       email
    })

    if(!user){
        throw new ApiError(404, "User does not exist!")
    }
    // validate password
    const isPasswordvalid = await user.isPasswordCorrect(password)
    if(!isPasswordvalid) {
        throw new ApiError(401, "Password is incorrect!")
    }

    //access and refresh token
    const {accessToken,refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).
    select("-refreshToken -password")

    //send cookie
    const options = {
        httpOnly: true,
        secure: true
        
    } //cookies are only modifiable through server

    return res.status(200)
    .cookie("accessToken",accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200,
            {
                user: loggedInUser, accessToken,
                refreshToken
            },
            "User logged in successfully"
            )
    )


})

export const logOutUser = asyncHandler(async (req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes field from documennt
            }
        },
        {
            new: true
        }
    )
    //for cookies
    const options = {
    httpOnly: true,
    secure: true
        }

        return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken",options)
        .json(new ApiResponse(200, {}, "User logged Out"))
})