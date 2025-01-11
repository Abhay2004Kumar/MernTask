import {Router} from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { logOutUser, loginUser, registerUser } from "../controllers/user.controller.js";

const Userrouter = Router();

//User routes
Userrouter.route("/register").post(registerUser)
Userrouter.route("/login").post(loginUser)
Userrouter.route("/logout").post(verifyJWT,logOutUser)

export default Userrouter;
