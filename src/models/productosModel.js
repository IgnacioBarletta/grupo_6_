const fs = require('fs');
const jsonFile = JSON.parse(fs.readFileSync(__dirname +'/products.JSON'))
module.exports = {
    findAll(){
        return jsonFile.products
    },
    findByPk(id){
        return jsonFile.products.find(product =>
            Number(product.id) === Number (id)
            )
    }}