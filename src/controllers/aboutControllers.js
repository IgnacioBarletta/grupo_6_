const path = require('path')

const aboutControllers = {
    FAQ: (req, res) => {
        res.render('footer/FAQ')
    },
    masInfo: (req, res) => {
        res.render('footer/masInfo')
    },
    privacidad: (req, res) => {
        res.render('footer/privacidad')
    },
    queEs: (req, res) => {
        res.render('footer/queEs')
    },
    quienesSomos: (req, res) => {
        res.render('footer/quienesSomos')
    },
    seisRazones: (req, res) => {
        res.render('footer/seisRazones')
    },
    terminos: (req, res) => {
        res.render('footer/terminos')
    },
    tipos: (req, res) => {
        res.render('footer/tipos')
    },
}

module.exports = aboutControllers ;