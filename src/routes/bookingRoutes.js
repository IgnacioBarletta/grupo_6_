const express = require('express');
const bookingRoutes = express.Router();
const path = require('path');

const bookingControllers = require('../controllers/bookingControllers');

bookingRoutes.get('/productDetail', bookingControllers.productDetail)
bookingRoutes.get('./productList/:id', bookingControllers.productList)
bookingRoutes.get('./new',bookingControllers.new)


/*
aboutRoutes.get('/detail/:id', planetsController.detail)

///para solicitar una lista de productos//
const express = require('express');
const router = express.Router();
router.get("/productos",function(req, res){

    res.send(req.query);
})



*/
module.exports = bookingRoutes