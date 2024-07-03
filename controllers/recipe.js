import { RecipeModel } from "../models/recipe.js";

//Get All recipes
export const getRecipes = async (req, res, next) => {
    try {
        //Get query params
        const { limit, skip, search } = req.query;
        //Get all recipe from databse
        const allRecipes = await RecipeModel
            .find({ name: search })
            .limit(limit)
            .skip(skip);
        //return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error)

    }
};
//Post recipes
export const postRecipes = async (req, res, next) => {
    try {
        //Add recipe to database
        const newRecipe = await RecipeModel.create({
            ...req.body,
            image: req.file.filename
        })
        //return respon
        res.json('Recipe Added')
    } catch (error) {
        next(error);
    }
};

//Patch recipe
export const patchRecipe = async (req, res, next) => {
    try {
        // updste recipebyID
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //Return response
        res.json(updatedRecipe)

    } catch (error) {
        next(error)
    }
}
// export const patchRecipe = (req, res) => {
//     res.json(`Recipe with  ID:${req.params.id} updated`)
// }

//delete recipe
export const deleteRecipe = async (req, res) => {
    try {
        // delete recipe by id 
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(` Recipe with ID ${req.params.id} was deleted`)
    } catch (error) {
        next(error)
    }
};

//Get a single recipe

export const getRecipe = async (req, res, next) => {

    try {
        //get a recipe by ID
        const getArecipe = await RecipeModel.findById(req.params.id)
        // return a response
        res.json(getArecipe)
    } catch (error) {
        next(error)
    }

} 
