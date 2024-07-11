import { Router } from "express";
import { localUpload, remoteUploads } from "../middlewares/uploads.js";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";
import { checkUserSession } from "../middlewares/auth.js";


// craete a router
const recipeRouter = Router();


//Apply middlewares

//define your routes/

recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',checkUserSession, remoteUploads.single('image'), postRecipes );

recipeRouter.patch('/recipes/:id',checkUserSession,patchRecipe )

recipeRouter.delete('/recipes/:id', checkUserSession,deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe)
// recipeRouter.patch('/recipes/:id', patchRecipe);


//Export Router
export default recipeRouter;