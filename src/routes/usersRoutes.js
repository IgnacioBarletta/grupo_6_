const express = require('express');
const userRoutes = express.Router();
const path = require('path');

const userControllers = require('../controllers/userControllers');

userRoutes.get('/login', userControllers.login)
userRoutes.get('/register', userControllers.register)


/*
aboutRoutes.get('/detail/:id', planetsController.detail)
*/
module.exports = userRoutes