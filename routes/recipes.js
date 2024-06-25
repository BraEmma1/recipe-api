import { Router } from "express";

// craete a router
const recipeRouter = Router();

//define your routes

recipeRouter.get('/recipes', (req, res) => {
    res.json('All recipes')
});

recipeRouter.post('/recipes', (req, res) => {
    res.json('Recipe added')
});

recipeRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe with  ID:${req.params.id} updated`)
})

recipeRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with ID:${req.params.id} deleted`)
});
//Export Router
export default recipeRouter;