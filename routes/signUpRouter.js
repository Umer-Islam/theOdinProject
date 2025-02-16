const {Router} = require('express')
const signUpRouter = Router()
const {get,post}  = require('../controllers/signUpController')
signUpRouter.get('/' ,get)
signUpRouter.post('/',post)



module.exports = signUpRouter