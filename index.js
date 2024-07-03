import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL)

//Create aExpress App
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs:true,
    tags:[ 'categories','recipes'],
    mongooseModels:mongoose.modelNames(),
});

//apply middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'))

// use route

app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

//listen for incoming request
const port = process.env.PORT || 3000
app.listen(3000, () =>{
    console.log(`App listening on port ${port}`);
});




