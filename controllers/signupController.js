const signupController = {
  signupGet: (req, res) => {
  res.render('signup')
  },
  signupPost: async (req,res) => {
   const {username,email,password} = req.body;
   console.log(req.body)
   res.send(`${username}, ${email}, ${password}`)
  }
};
module.exports = signupController;
