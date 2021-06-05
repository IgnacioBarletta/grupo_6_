const express = require('express');
const userRoutes = express.Router();
const path = require('path');

const userControllers = require('../controllers/userControllers');

userRoutes.get('/login', userControllers.login)
userRoutes.get('/register', userControllers.register)
userRoutes.post('/register', userControllers.store)



module.exports = userRoutes