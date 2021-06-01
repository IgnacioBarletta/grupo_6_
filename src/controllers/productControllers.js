const path =require('path')
const productosModel = require('../models/productosModel')
const productControllers ={
    
    list :(req,res)=>{
        const productList = productosModel.findAll()
        console.log(productList)
        res.render('product/list',{productList})
    },
}
module.exports = productControllers