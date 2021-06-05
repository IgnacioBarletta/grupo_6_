
const fs = require('fs');
const path = require('path')

module.exports = {
    
    readFile(){
       return JSON.parse(fs.readFileSync(this.filename)) 
    },
    
    filename: path.resolve(__dirname, './register.JSON'),

   /* findAll(){
        return this.readFile()
    },

    findByPk(id){
        return this.readFile().find(product =>Number(product.id) === Number (id))    
    },*/

    create(regist) {
        regist.id = this.generateId();
        const register = this.readFile();
        const registersUpdated = [...register, regist];
        this.writeFile(registersUpdated);
        return regist;
    },
    generateId() {
        const register = this.readFile();
        const lastRegist = register.pop();
        return lastRegist.id + 1;
    },
    writeFile(newRegister){
       // convertir el array que te llega como parametro a JSON
       const json = JSON.stringify(newRegister, null , 2) 

       // reescribir el archivo .JSON
       fs.writeFileSync(this.filename, json);
    },
    

}


    
