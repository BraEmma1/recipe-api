import { Router } from "express";
import { register } from "../controllers/user.js";

//create router
const userRouter = Router();

//define your routes
userRouter.post('/register', register)
//export router
export default userRouter;
//