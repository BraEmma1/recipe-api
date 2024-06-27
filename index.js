import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL)

//Create aExpress App

const app = express();

//apply middlewares
app.use(express.json());

// use route
app.use(recipeRouter);

//listen for incoming request

app.listen(3000, () =>{
    console.log('App listening on port 3000');
});




