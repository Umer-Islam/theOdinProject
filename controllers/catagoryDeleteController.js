const db = require('../db/queries')
const catagoryDeleteController = {


    deleteCatagory: async (req, res) => {
        try {
            const { catagory_name } = req.body

            await db.deleteCatagoryFromDb(catagory_name);
            res.redirect('/')

        } catch (error) {
            console.log(`error: ${error}`)
        }
    }
}


module.exports = catagoryDeleteController