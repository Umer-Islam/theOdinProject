const { Router } = require('express')
const catagoryDelete = Router()
const { deleteCatagory } = require('../controllers/catagoryDeleteController')

catagoryDelete.post('/', deleteCatagory)


module.exports = catagoryDelete