
const fs = require('fs');
const path = require('path')



module.exports = {
    
    readFile(){
       return JSON.parse(fs.readFileSync(this.filename)) 
    },
    
    filename: path.resolve(__dirname, './productos.JSON'),

    findAll(){
        return this.readFile()
    },

    findByPk(id){
        return this.readFile().find(product =>Number(product.id) === Number (id))    
    },
    create(product) {
        product.id = this.generateId();
        const products = this.readFile();
        const productsUpdated = [...products, product];
        this.writeFile(productsUpdated);
        return product;
    },
    generateId() {
        const products = this.readFile();
        const lastProduct = products.pop();
        return lastProduct.id + 1;
    },
    writeFile(newProducts){
       // convertir el array que te llega como parametro a JSON
       const json = JSON.stringify(newProducts, null , 2) 

       // reescribir el archivo .JSON
       fs.writeFileSync(this.filename, json);
    },
    destroy(id) {
        const products = this.readFile();

        const newProducts = products.filter(product => product.id != id);

        this.writeFile(newProducts);
    },
    update(data, id) {
        const products = this.readFile();

        const newProducts = products.map(product => {
            if(product.id == id){
                product = {
                    id: product.id,
                    ...data
                }
            }
            return product;
        });

        this.writeFile(newProducts);
    },
    

}


    
