const db = require('../db/queries')


const path = require('path')

const changeDetailsRouter = {

    get: (req,res) => { 
        const filePath = path.parse(__dirname).dir
      
        res.render(filePath + "/views/gameForm.ejs")
        
     },
     post: async (req, res) => {
        try {
          
          const { name, yearOfRelease, price } = req.body;
      
          if (!name || !yearOfRelease || !price) {
            return res.status(400).json({ error: 'All fields are required.' });
          }
      
          await db.insertGameData(name, yearOfRelease, price);
      
          console.log('Data added successfully...');
          res.status(201).redirect('/')
      
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'An internal server error occurred.' });
        }
      }
      
}
// console.log(filePath + "/views/gameForm.ejs")

module.exports = changeDetailsRouter;