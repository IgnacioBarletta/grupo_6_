const express = require('express');
const bookingRoutes = express.Router();
const path = require('path');

const bookingControllers = require('../controllers/bookingControllers');

bookingRoutes.get('/productDetail/:id?', bookingControllers.productDetail)
bookingRoutes.get('/productList/:id?', bookingControllers.productList)

bookingRoutes.post('/new', bookingControllers.store)
bookingRoutes.get('/new',bookingControllers.new)
bookingRoutes.get('/edit',bookingControllers.edit)
bookingRoutes.get('/detalle/:id?', bookingControllers.detalle)


module.exports = bookingRoutes