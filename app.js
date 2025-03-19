require("dotenv").config();

const express = require("express");
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter")
const assetsPath = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});