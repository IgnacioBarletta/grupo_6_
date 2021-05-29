const path = require('path')

const mainControllers = {
    index: (req, res) => {
        res.render('index')
    },

    ayuda: (req, res) => {
            res.render('ayuda')
     },
}

module.exports = mainControllers;