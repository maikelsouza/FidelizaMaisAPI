const model = require('../config/modelLoader');

class campoItemProgramaFidelidadeRepositorio{

    constructor(){}

    async update(id, data) {
        model.CampoItemProgramaFidelidade.update(data,{
            where: { id: id }   
        });
    }
   
}

module.exports = campoItemProgramaFidelidadeRepositorio;