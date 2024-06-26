import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// craete a router
const recipeRouter = Router();

//define your routes

recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes')
});

recipeRouter.post('/recipes', async (req, res) => {
    //Add recipe to database
    await RecipeModel.create(req.body)
    //return respon
    res.json('Recipe Added')
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with  ID:${req.params.id} updated`)
})

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID:${req.params.id} deleted`)
});

recipeRouter.get('/recipes/:id', (req, res) => {
    res.json(`Here is  the sinle product you asked for: product ID: ${req.params.id}`)
})


//Export Router
export default recipeRouter;