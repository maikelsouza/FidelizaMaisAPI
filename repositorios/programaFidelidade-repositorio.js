const model = require('../config/modelLoader');
const Op = model.Sequelize.Op;

class programaFidelidadeRepositorio{

    constructor(){}


    async update(id, data) {   
        try{
         return await model.sequelize.transaction(async(t) => {
                await model.ProgramaFidelidade.destroy({where: {id}},{t}); 
                await model.ProgramaFidelidade.create(data,{include: 
                    { association: 'CampoItemProgramaFidelidades' }},
                    {t});                
            });   
        }catch(err){
            console.log('Erro ao tentar atualizar um ProgramaFidelidade e seus CampoItemProgramaFidelidades : ', err);
            res.status(500).send({ message: 'Erro no processamento', error: err });
        }    
    }

    async delete(id) {             
        model.ProgramaFidelidade.destroy({
                  where: { 
                      id: id 
                    }   
                });        
        }

    async create(data){                                        
        model.ProgramaFidelidade.create(data,{include: { association: 'CampoItemProgramaFidelidades' }});
     }

     async getById(id) {
        return await model.
        ProgramaFidelidade.findByPk(id ,{
                attributes: ['id', 'nome', 'descricao','dataExpiracao', 'ativo', 'regra','estabelecimentoId'],
                include: { association: 'CampoItemProgramaFidelidades',
                           attributes: ['id', 'nome','descricao','dataExpiracao','quantidadePontos'], required: true
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