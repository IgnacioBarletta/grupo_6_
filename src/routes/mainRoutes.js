const express = require('express');
const mainRoutes = express.Router();
const path = require('path');

const mainControllers = require('../controllers/mainControllers');

mainRoutes.get('/index', mainControllers.index)
mainRoutes.get('/ayuda', mainControllers.ayuda)


/*
aboutRoutes.get('/detail/:id', planetsController.detail)
*/
module.exports = mainRoutes