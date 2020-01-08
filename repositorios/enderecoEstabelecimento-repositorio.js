const model = require('../config/modelLoader');

class enderecoEstabelecimentoRepositorio{

    constructor(){}


    async update(id, data) {
        model.EnderecoEstabelecimento.update(data,{
            where: { id: id }   
        });
    }

}

module.exports = enderecoEstabelecimentoRepositorio;