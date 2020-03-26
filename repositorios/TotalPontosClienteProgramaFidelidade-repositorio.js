const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class TotalPontosClienteProgramaFidelidadeRepositorio{

    constructor(){}


    async create(data){          
        model.TotalPontosClienteProgramaFidelidade.create(data,
            {include: 
               [ model.PontosClienteProgramaFidelidade]                       
            }
         );
     }    

     async update(id, data) {
      model.TotalPontosClienteProgramaFidelidade.update(data,{
          where: {id}   
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