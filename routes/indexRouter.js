// routes/authorRouter.js
const { Router } = require("express");
const { getMessages, getMessageById, addMessage } = require("../controllers/indexController")

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:messageId", getMessageById);
indexRouter.get("/new", (req, res) =>  res.render("form"));
indexRouter.post("/new", addMessage);

module.exports = indexRouter;