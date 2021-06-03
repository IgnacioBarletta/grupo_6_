const fs = require('fs');
const jsonFile = JSON.parse(fs.readFileSync(__dirname +'/productos.JSON'))
module.exports = {
    findAll(){
        return jsonFile.productos
    },
    findByPk(id){
        return jsonFile.productos.find(product =>
            Number(product.id) === Number (id)
            )
    }}