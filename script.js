const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();


// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
    const { name, score } = req.body;
    
});



