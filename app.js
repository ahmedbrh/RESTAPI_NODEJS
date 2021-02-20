const express = require("express");
const app = express();
const env = require("dotenv").config();
const mongoose = require("mongoose");
const postsRoute = require("./Routes/posts");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
//body-parser
app.use(bodyParser.json());

app.use("/posts", postsRoute);

// app.get("/", (req, res) => {
//   res.send("hello express");
// });

//Connecting to the database
mongoose.connect(
  process.env.DATABASE_KEY,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    err ? console.log(err) : console.log("connecting to the database :) ");
  }
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`the server is listening on port  ${process.env.PORT}..`);
});
