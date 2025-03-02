const db = require("../db/queries");
const bcrypt = require("bcryptjs");
const signupController = {
  signupGet: (req, res) => {
    res.render("signup");
  },
  signupPost: async (req, res) => {
    const { username, email, password } = req.body;
    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = await db.createUser(username, email, hashed_password);
    // console.log(newUser);
    // res.send("user created successfully");
    res.redirect("/");
  },
};
module.exports = signupController;
