
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
const indexRouter = (req,res) => { 
  res.render('index',{title:"messageBoard",messages:messages})
 }

 module.exports = indexRouter
 module.exports.messages = messages