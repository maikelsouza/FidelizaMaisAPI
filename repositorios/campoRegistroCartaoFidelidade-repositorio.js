const model = require('../config/modelLoader');

class campoRegistroCartaoFidelidadeRepositorio{

    constructor(){}

    async update(id, data) {
        model.CampoRegistroCartaoFidelidade.update(data,{
            where: { id: id }   
        });
    }
   
}

module.exports = campoRegistroCartaoFidelidadeRepositorio;