const path = require("path")
const db = require('../db/queries')
const catagoriesCrudController = {
    get: (req,res) => { 
        const filePath = path.parse(__dirname).dir
        res.render(filePath + "/views/catagoriesForm.ejs")
     },

    post: async (req, res) => {
       try {
        const { catagory } = req.body
        await db.addCatagory(catagory)
        console.log(`catagories added: from catagories controller`)
        res.redirect('/')
       } catch (error) {
        console.log(`error ${error}`)
       }
    }

}

module.exports = catagoriesCrudController