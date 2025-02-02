const fs = require('node:fs')
const path = require('node:path');
const db = require("../db/queries");

// CRUD methods for /new route
const newController = {
 newGet: async (req,res) => { 
    // console.log(path.parse(__dirname).dir)
    // res.render(path.parse(__dirname).dir + '/views/index.ejs' )
    const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));

 },
 newPost: async(req,res) => { 
    // console.log(req.body)
    // const {username} = req.body
    // res.send(`username to be saved: ${req.body.username}`)
    const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
  }
}


module.exports = newController