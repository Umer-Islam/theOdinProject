const bcrypt = require("bcryptjs");
const db = require("../db/queries");
const loginController = {
  loginGet: (req, res) => {
    res.render("login");
  },
  loginPost: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await db.getUserByUsername(username);
      const hashed_password = user.hashed_password;
      // console.log(hashed_password);
      console.log(`password: ${password}, hashed_password: ${hashed_password}`);
      const match = await bcrypt.compareSync(password, hashed_password);

      res.send(`password is : ${match}`);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = loginController;
