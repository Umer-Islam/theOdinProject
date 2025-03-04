const bcrypt = require("bcryptjs");
const signupController = {
  signupGet: (req, res) => {
    res.render("signup");
  },
  signupPost: async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    const hashed_password = await bcrypt.hash(password, 10);
    console.log(hashed_password);
    res.send({ username, email, password ,hashed_password});
  },
};

module.exports = signupController;
