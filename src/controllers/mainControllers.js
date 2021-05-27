const path = require('path')

const mainControllers = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/index.html" ))
    },

    ayuda: (req, res) => {
            res.sendFile(path.resolve(__dirname,"../views/ayuda.html" ))
     },
}

module.exports = mainControllers;