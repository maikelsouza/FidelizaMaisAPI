const model = require('../config/modelLoader');

class telefoneRepositorio{

    constructor(){}


    async update(id, data) {
        model.Telefone.update(data,{
            where: { id: id }   
        });
    }

    async create(data){  
        model.Telefone.create(data);
     }

}

module.exports = telefoneRepositorio;