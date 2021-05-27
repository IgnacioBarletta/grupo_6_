const express = require('express');
const bookingRoutes = express.Router();
const path = require('path');

const bookingControllers = require('../controllers/bookingControllers');

bookingRoutes.get('/productDetail', bookingControllers.productDetail)


/*
aboutRoutes.get('/detail/:id', planetsController.detail)
*/
module.exports = bookingRoutes