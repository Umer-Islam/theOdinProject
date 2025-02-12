const {Router}=require('express')
const catagoriesCrudRouter = Router()

const{get,post}= require('../controllers/catagoriesCrudController')

catagoriesCrudRouter.get('/',get)
catagoriesCrudRouter.post('/',post)



module.exports = catagoriesCrudRouter
