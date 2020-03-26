const model = require('../config/modelLoader');
const Op = model.Sequelize.Op
const Fn = model.Sequelize.fn
const Col = model.Sequelize.col

class TotalPontosClienteProgramaFidelidadeRepositorio{

    constructor(){}


    async create(data){          
        model.TotalPontosClienteProgramaFidelidade.create(data,
            {include: 
               [ model.PontosClienteProgramaFidelidade]                       
            }
         );
     }    

     async getCountUsuarioIdAtivo(usuarioId) {
      return await model.
         TotalPontosClienteProgramaFidelidade.findOne({
                  attributes: [[Fn('count', Col('usuarioId') ), 'usuarioId',]],
                  where: {  
                     [Op.and]: 
                     [{usuarioId : usuarioId}, {ativo: true}]
               },    
            });
    }    

    async getUsuarioIdAtivo(usuarioId) {
      return await model.
         TotalPontosClienteProgramaFidelidade.findOne({
                  attributes: ['id', 'totalPontos'],
                  where: {  
                     [Op.and]: 
                     [{usuarioId : usuarioId}, {ativo: true}]
               },    
            });
    }    
     
}

module.exports = TotalPontosClienteProgramaFidelidadeRepositorio;