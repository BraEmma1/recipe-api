import { Router } from "express";
import multer from "multer";
import { localUpload } from "../middlewares/uploads.js";
import { getCategories, postCategory } from "../controllers/category.js";


//create upload middleware
const upload = multer({dest:'uploads/' })



//create a router
const categoryRouter = Router();

// Define your routes
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories', localUpload.single('image'),postCategory);








//export router
export default categoryRouter;