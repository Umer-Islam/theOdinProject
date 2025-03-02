const { Router } = require("express");
const {
  addMessagePost,
  deleteMessage,
} = require("../controllers/addMessageController");

const addMessageRouter = Router();

addMessageRouter.post("/", addMessagePost);
addMessageRouter.post("/delete", deleteMessage);

module.exports = addMessageRouter;
