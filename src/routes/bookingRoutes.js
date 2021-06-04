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


/*

///para solicitar una lista de productos//
const express = require('express');
const router = express.Router();
router.get("/productos",function(req, res){

    res.send(req.query);
})
*/
module.exports = bookingRoutes