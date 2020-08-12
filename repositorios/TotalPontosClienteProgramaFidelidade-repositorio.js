const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class totalPontosClienteProgramaFidelidadeRepositorio{

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

    async getUsuarioIdProgramaFidelidadeIdAtivo(usuarioId, programaFidelidadeId) {
      return await model.
         TotalPontosClienteProgramaFidelidade.findOne({
                  attributes: ['id', 'totalPontos'],
                  where: {  
                     [Op.and]: 
                     [{usuarioId}, {ativo: true}, {programaFidelidadeId}
                    ]
               },    
            });
    }    

    async buscarPorIdUsuarioEAtivo(usuarioId, ativo) {
        return await model.
           TotalPontosClienteProgramaFidelidade.findAll({
                    attributes: ['id', 'usuarioId', 'programaFidelidadeId','totalPontos'],
                    where: {  
                       [Op.and]: 
                       [{usuarioId}, {ativo: ativo}
                      ]
                 },    
              });
      }    
     
}

module.exports = totalPontosClienteProgramaFidelidadeRepositorio;