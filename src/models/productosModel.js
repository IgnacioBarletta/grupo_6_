
const fs = require('fs');
const path = require('path')
const jsonFile = JSON.parse(fs.readFileSync(__dirname +'/productos.JSON'))


module.exports = {
    filename: path.resolve(__dirname, '/productos.JSON'),

    findAll(){
        return jsonFile.productos
    },

    findByPk(id){
        return jsonFile.productos.find(product =>
            Number(product.id) === Number (id)
            )
    },
    create(planet) {
        productos.id = jsonFile.generateId();
        const products = jsonFile.readFile();
        const productsUpdated = [...products, product];
        this.writeFile(productsUpdated);
        return product;
    },
    generateId() {
        const products = jsonFile.readFile();
        const lastProduct = productos.pop();
        return lastProductos.id + 1;
    },
    

}


    
