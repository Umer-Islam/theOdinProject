const path = require('path')
const db = require('../db/queries')

const rootController = {


    get: async (req, res) => {
        const filePath = path.parse(__dirname).dir
        res.render('index')


    },

}

module.exports = rootController;