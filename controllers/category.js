import { json } from "express";
import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
try {
    //Get query params
    const { limit, skip, search } = req.query;
    //Get all categories from Database
    const allCategories = await CategoryModel
    .find(JSON.parse(filter))
    .limit(limit)
    .skip(skip);;
    //Return respons
    res.status(200).json(allCategories)
} catch (error) {

   next(error)  
}
}


export const postCategory = async (req, res,next)  => {
    try {
        
        //add new category to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        //return response
        res.status(201).json(newCategory);
    } catch (error) {
     next(error)   
    }
}