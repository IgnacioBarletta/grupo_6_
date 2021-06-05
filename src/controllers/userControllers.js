const path = require('path')
const registerModel = require('../models/registerModel')

const userControllers = {
    login: (req, res) => {
        res.render('users/login')
    },

    register: (req, res) => {
            res.render('users/register')
     },

     store: (req, res) => {
        const { nombre, apellido, email, contraseña} = req.body;
        const regist = {
            nombre:nombre,
            apellido:apellido,
            email:email,
            contraseña:contraseña,
        }
        registerModel.create(regist)
        res.redirect('/')
    },
}

module.exports = userControllers;

