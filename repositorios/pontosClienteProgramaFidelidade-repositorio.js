const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class pontosClienteProgramaFidelidadeRepositorio{

    constructor(){}


    async create(data){  
        model.PontosClienteProgramaFidelidade.create(data);
     }
}

module.exports = pontosClienteProgramaFidelidadeRepositorio;