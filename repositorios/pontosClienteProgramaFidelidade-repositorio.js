const model = require('../config/modelLoader');
const Op = model.Sequelize.Op
const Fn = model.Sequelize.fn
const Col = model.Sequelize.col

class pontosClienteProgramaFidelidadeRepositorio{

    constructor(){}


    async create(data){  
        model.PontosClienteProgramaFidelidade.create(data);
     }

     async getSumPontosProgramaFidelidade(totalPontosClienteProgramaFidelidadeId) {
        return await model.
                PontosClienteProgramaFidelidade.findOne({
                    attributes: [[Fn('sum', Col('pontos') ), 'pontos',]],
                    where:                          
                        {totalPontosClienteProgramaFidelidadeId}
                      
                    }
                );
          }    
}

module.exports = pontosClienteProgramaFidelidadeRepositorio;