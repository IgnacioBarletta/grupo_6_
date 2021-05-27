const path = require('path')

const aboutControllers = {
    FAQ: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/FAQ.html" ))
    },
    masInfo: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/masInfo.html"))
    },
    privacidad: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/privacidad.html"))
    },
    queEs: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/queEs.html"))
    },
    quienesSomos: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/quienesSomos.html"))
    },
    seisRazones: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/seisRazones.html"))
    },
    terminos: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/terminos.html"))
    },
    tipos: (req, res) => {
        res.sendFile(path.resolve(__dirname,"../views/tipos.html"))
    },
}

module.exports = aboutControllers ;