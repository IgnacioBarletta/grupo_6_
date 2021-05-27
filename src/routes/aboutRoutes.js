const express = require('express');
const aboutRoutes = express.Router();
const path = require('path');

const aboutControllers = require('../controllers/aboutControllers');

aboutRoutes.get('/FAQ', aboutControllers.FAQ)
aboutRoutes.get('/masInfo', aboutControllers.masInfo)
aboutRoutes.get('/privacidad', aboutControllers.privacidad)
aboutRoutes.get('/queEs', aboutControllers.queEs)
aboutRoutes.get('/quienesSomos', aboutControllers.quienesSomos)
aboutRoutes.get('/seisRazones', aboutControllers.seisRazones)
aboutRoutes.get('/terminos', aboutControllers.terminos)
aboutRoutes.get('/tipos', aboutControllers.tipos)

/*
aboutRoutes.get('/detail/:id', planetsController.detail)
*/
module.exports = aboutRoutes