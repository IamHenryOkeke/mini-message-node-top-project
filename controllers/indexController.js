// controllers/authorController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
  const messages = db.messages;

  if (!messages) {
    throw new CustomNotFoundError("No Authors not found");
  }

  res.render("index", { title: "Mini message board", messages })
});

const getMessageById = asyncHandler(async (req, res) => {
  const {messageId} = req.params;

  const message = db.messages.find((message) => message.id === Number(messageId))

  if (!message) { 
    return res.status(404).send("Message not found");
  }; 

  res.render("view-message", { title: "Mini message board", message })
});

const addMessage = asyncHandler(async (req, res) => {
  const {messageText, messageAuthor} = req.body

  db.messages.push({ text: messageText, user: messageAuthor, added: new Date(), id: db.messages.length + 1 });
  
  res.redirect("/")
});

module.exports = { getMessages, getMessageById, addMessage };