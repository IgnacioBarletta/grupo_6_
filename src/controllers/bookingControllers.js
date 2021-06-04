const path = require('path')
const productosModel = require('../models/productosModel')
const bookingControllers = {
 

    productDetail: (req, res) => {
       
        res.render('booking/productDetail')
    },
    productList: (req, res) => {
      
        
        const productos =  productosModel.findAll()
        
        res.render('booking/productList', {productos})

    
    },
    new :(req,res)=> {
        res.render('booking/new')   
    },
    edit :(req,res)=> {
        res.render('booking/edit')   
    },
    detalle :(req,res)=> {
        const id = req.params.id
        const detalleProductos = productosModel.findByPk(id)
        res.render('booking/detalle',{detalleProductos})   
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