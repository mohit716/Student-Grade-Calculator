const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();


// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
    const name = req.body.name;
    const score = req.body.score;
    const row = `"${name}","${score}"\n`;
    fs.appendFile("grades.csv", row, (err) => {
        if (err) {
          return res.send("Error saving data");
        }
        res.send("<h2>Successfully submitted!</h2>");
      });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
  });



