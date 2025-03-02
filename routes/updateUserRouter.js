const { Router } = require("express");
const {
  updateUserGet,
  updateUserPost,
} = require("../controllers/updateUserController");
const { ensureAuthenticated } = require("../authCheck");
const updateUserRouter = Router();

updateUserRouter.get("/", ensureAuthenticated, updateUserGet);
updateUserRouter.post("/", updateUserPost);
module.exports = updateUserRouter;
