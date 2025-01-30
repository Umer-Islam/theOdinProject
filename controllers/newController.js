const fs = require('node:fs')
const path = require('node:path');
// CRUD methods for /new route
const newController = {
newGet: (req,res) => { 
    console.log(path.parse(__dirname).dir)
    res.render(path.parse(__dirname).dir + '/views/index.ejs' )
 },
 newPost: (req,res) => { 
    console.log(req.body)
    const {username} = req.body
    res.send(`username to be saved: ${req.body.username}`)
  }
}


module.exports = newController