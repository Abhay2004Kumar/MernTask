import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"  //used for applying CRUD operation on cookies
import dotenv from "dotenv"

dotenv.config();

const app=express()



//config cors
app.use(cors({
    origin: "https://mern-task-delta.vercel.app", // Allow requests from the frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow cookies to be sent
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16Kb"})) //used for extended objects


app.use(cookieParser())

//routes import
import Userrouter from "./routes/user.routes.js"

//routes declare
app.use("/api/v1/users",Userrouter)





export {app}