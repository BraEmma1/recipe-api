import { RecipeModel } from "../models/recipe.js";

//Get All recipes
export const getRecipes =async (req, res, next) => {
    try {
        //Get all recipe from databse
        const allRecipes = await RecipeModel.find();
        //return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error)
        
    }
};
 //Post recipes
export const postRecipes =async (req, res, next) => {
    try {
        //Add recipe to database
        const newRecipe = await RecipeModel.create(req.body)
        //return respon
        res.json('Recipe Added')
    } catch (error) {
        next(error);
    }
};

//Patch recipe
export const patchRecipe = (req, res) => {
    res.json(`Recipe with  ID:${req.params.id} updated`)
}

//delete recipe
export const deleteRecipe =  async (req, res) => {
    try {
        // delete recipe by id 
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json( ` Recipe with ID ${req.params.id} was deleted`)
    } catch (error) {
        next(error)
    }
};

//Get a single recipe

export const getRecipe = (req, res) => {
    res.json(`Here is  the sinle product you asked for: product ID: ${req.params.id}`)
} 
