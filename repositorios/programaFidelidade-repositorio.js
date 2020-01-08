const model = require('../config/modelLoader');
const campoItemProgramaFidelidade = require('./campoItemProgramaFidelidade-repositorio');
const Op = model.Sequelize.Op;

class programaFidelidadeRepositorio{

    constructor(){}

    async update(id, data) {
        model.ProgramaFidelidade.update(data,{
            where: { id: id }   
        });
        let _campoRegistroCartaoFidelidade = new campoItemProgramaFidelidade();
        await data.CampoRegistroCartaoFidelidades.forEach(element => {
             _campoRegistroCartaoFidelidade.update(element.id,element);            
        });
    }

    async create(data){                                        
        model.ProgramaFidelidade.create(data,{include: { association: 'CampoItemProgramaFidelidades' }});
     }

     async getById(id) {
        return await model.
        ProgramaFidelidade.findByPk(id ,{
                attributes: ['id', 'nome', 'descricao','dataExpiracao', 'ativo', 'regra'],
                include: { association: 'CampoItemProgramaFidelidades',
                           attributes: ['id', 'nome','descricao','dataExpiracao'], required: true
                        },
                       // order: [[model.CampoItemProgramaFidelidade, 'createdAt', 'DESC']]
                        
                    },
            );
      }    

     async buscarPorUsuario(id) {
        return await model.ProgramaFidelidade.findAll(
            {attributes: ['id', 'nome', 'dataExpiracao'],
                where: {  
                    [Op.and]: 
                    [{usuarioId: id}, {ativo: true}]
                },
                order: [                
                    ['nome', 'ASC']
                ]
            });          
      }

      async buscarPorEstabelecimento(id) {
        return await model.ProgramaFidelidade.findAll(
            {attributes: ['id', 'nome', 'dataExpiracao', 'ativo'],
                where: {  
                    [Op.and]: 
                    [{estabelecimentoId: id}, {ativo: true}]
                },
                order: [                
                    ['nome', 'ASC']
                ]
            });          
      }

}

module.exports = programaFidelidadeRepositorio;