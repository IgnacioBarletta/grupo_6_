const path = require('path')
const productosModel = require('../models/productosModel')
const bookingControllers = {
 

    productDetail: (req, res) => {
        res.render('booking/productDetail')
    },
    productList: (req, res) => {
        const productsList = productosModel.findAll()
        res.render('booking/productList',{productsList})
    },
    new :(req,res)=> {
        res.render('booking/new')   
    },
    
}

module.exports = bookingControllers ;

/*const productosModel = require('../models/productosModel')
const productControllers ={
    
    list :(req,res)=>{
        const productList = productosModel.findAll()
        console.log(productList)
        res.render('product/list',{productList})
    },
}
module.exports = productControllers*/