import express from "express";

import recipeRouter from "./routes/recipes.js";
//Create aExpress App

const app = express();

// Define routes
app.get('/', (req,res) => {
res.json('Welcome home');
})
app.post('/login', (req, res) => {
    res.json('Login succesful');
});


app.patch('/update', (req, res) => {
    res.json('Username Changed Succesfully')
});


// use route
app.use(recipeRouter);

//listen for incoming request

app.listen(3000, () =>{
    console.log('App listening on port 3000');
});