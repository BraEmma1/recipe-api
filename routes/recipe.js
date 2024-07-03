import { Router } from "express";
import { localUpload, remoteUploads } from "../middlewares/uploads.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";


// craete a router
const recipeRouter = Router();

//define your routes

recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', remoteUploads.single('image'), postRecipes );

recipeRouter.patch('/recipes/:id',patchRecipe )

recipeRouter.delete('/recipes/:id',deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe)
// recipeRouter.patch('/recipes/:id', patchRecipe);


//Export Router
export default recipeRouter;