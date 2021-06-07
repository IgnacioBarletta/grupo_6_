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
        const product = productosModel.findByPk(req.params.id);
        res.render('booking/edit'), {
            product
        }; 
    },


    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;
        
        console.log(hola)
        productosModel.update(data, id);

        res.redirect('/booking/edit/' + id);
    },



    detalle :(req,res)=> {
        const id = req.params.id
        const detalleProductos = productosModel.findByPk(id)
        res.render('booking/detalle',{detalleProductos})   
    },

    store: (req, res) => {
        const { destination, name} = req.body;
        const product = {
            destination: destination,
            name:name,
           
        }
        productosModel.create(product)
        res.redirect('/')
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
       productosModel.destroy(id);

        res.redirect('/booking/productList');
    }

}

module.exports = bookingControllers ;
