const express = require('express');
const productRoutes = express.Router();
const path = require('path');

const productControllers = require('../controllers/productControllers');

productRoutes.get('/productDetail', productControllers.productDetail)



/*
productRoutes.get('/detail/:id', planetsController.detail)
*/
module.exports = productRoutes