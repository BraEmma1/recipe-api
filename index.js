import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL)

//Create aExpress App

const app = express();

//apply middlewares
app.use(express.json());

// use route
app.use(recipeRouter);
app.use(categoryRouter)




//listen for incoming request
const port = process.env.PORT || 3000
app.listen(3000, () =>{
    console.log(`App listening on port ${port}`);
});




