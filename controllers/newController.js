const {messages} = require("../routes/indexRouter")
const newController = {
    getForm : (req, res) => {
        res.render('addmessage')
      },
    postForm : (req, res) => {
console.log(req.body)
const {text,user}= req.body
messages.push({ text:text,user: user, added: new Date() });
res.redirect('/')
      }
      

}

module.exports = newController;