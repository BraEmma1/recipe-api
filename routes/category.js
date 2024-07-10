import { Router } from "express";
// import multer from "multer";
import { localUpload, remoteUploads } from "../middlewares/uploads.js";
import { getCategories, postCategory } from "../controllers/category.js";
import { checkUserSession } from "../middlewares/auth.js";



//create upload middleware
// const upload = multer({dest:'uploads/' })



//create a router
const categoryRouter = Router();

// Define your routes
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories',checkUserSession, remoteUploads.single('image'),postCategory);








//export router
export default categoryRouter;