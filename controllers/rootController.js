const fs = require('node:fs')
const path = require('node:path')

const rootController = {
rootGet:(req,res) => { 
    console.log('console.log("usernames will be logged here - wip").')
    res.sendFile(__dirname + "/public/index.html")
 }
}


module.exports = rootController;