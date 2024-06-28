import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";

//create a router
const categoryRouter = Router();

// Define your routes
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories',postCategory);








//export router
export default categoryRouter;