import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.js";
import { checkUserSession } from "../middlewares/auth.js";

//create router
const userRouter = Router();

//define your routes
//Register A user 
userRouter.post('/register', register)
//user login
userRouter.post('/login', login)
//Get your profile
userRouter.get( '/profile', checkUserSession, profile)
userRouter.get ('/logout', checkUserSession, logout)



//export router
export default userRouter;