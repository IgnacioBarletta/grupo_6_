const express = require('express');
const bookingRoutes = express.Router();
const path = require('path');

const bookingControllers = require('../controllers/bookingControllers');

bookingRoutes.get('/productDetail/:id?', bookingControllers.productDetail)

bookingRoutes.get('/productList/:id?', bookingControllers.productList)

bookingRoutes.post('/new', bookingControllers.store)
bookingRoutes.get('/new',bookingControllers.new)

bookingRoutes.get('/edit/:id',bookingControllers.edit)
bookingRoutes.put('/edit/:id',bookingControllers.update)

bookingRoutes.get('/detalle/:id?', bookingControllers.detalle)
bookingRoutes.delete('/detalle/:id', bookingControllers.destroy)




module.exports = bookingRoutes