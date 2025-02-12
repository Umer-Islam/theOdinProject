const {Router} = require('express')
const gameFormRouter = Router()
const gameFormController = require('../controllers/gameFormController')

gameFormRouter.get('/',gameFormController.get)
gameFormRouter.post('/',gameFormController.post)



module.exports = gameFormRouter;