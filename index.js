var mongoose = require("mongoose");
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var app = express();

var User = require("./routes/User");
var Question = require("./routes/Question");
var Test = require("./routes/test");

const port = 3010;

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyparser.json());

mongoose
  .connect("mongodb://localhost:27017/quiz")
  .then(() => {
    console.log("Database is connected successfully...");
  })
  .catch(err => {
    console.log("Error is ", err.message);
  });

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi I am Muskaan Chutiya");
});

app.use("/question", Question);
app.use("/user", User);
app.use("/test", Test);

app.listen(port, () => {
  console.log(`Servering is listening on PORT ${port}`);
});
