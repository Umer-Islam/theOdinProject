const { Router } = require("express");
const { loginGet, loginPost } = require("../controllers/loginController");
const passport = require("passport");
require("../app")
const loginRouter = Router();

loginRouter.get("/", loginGet);
loginRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

module.exports = loginRouter;
