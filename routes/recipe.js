import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe.js";


// craete a router
const recipeRouter = Router();

//define your routes

recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes',postRecipes );

recipeRouter.patch('/recipes/:id',patchRecipe )

recipeRouter.delete('/recipes/:id',deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe)


//Export Router
export default recipeRouter;