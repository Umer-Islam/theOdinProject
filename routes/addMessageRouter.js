const { Router } = require("express");
const {
  addMessagePost,
} = require("../controllers/addMessageController");

const addMessageRouter = Router();

addMessageRouter.post("/", addMessagePost);

module.exports = addMessageRouter;
