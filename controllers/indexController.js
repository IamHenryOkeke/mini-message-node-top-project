// controllers/authorController.js

const {getAllMessages, getMessageByID, insertMessage} = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
  const messages = await getAllMessages();

  if (!messages) {
    throw new CustomNotFoundError("No messages not found");
  }

  res.render("index", { title: "Mini message board", messages })
});

const getMessageById = asyncHandler(async (req, res) => {
  const {messageId} = req.params;

  const message = await getMessageByID(messageId);

  console.log(message)

  if (!message) { 
    return res.status(404).send("Message not found");
  }; 

  res.render("view-message", { title: "Mini message board", message })
});

const addMessage = asyncHandler(async (req, res) => {
  const {messageText, messageAuthor} = req.body

  const message = {
    text: messageText,
    user: messageAuthor
  }

  await insertMessage(message);
  
  res.redirect("/")
});

module.exports = { getMessages, getMessageById, addMessage };