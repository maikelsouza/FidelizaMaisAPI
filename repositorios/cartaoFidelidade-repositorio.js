const model = require('../config/modelLoader');
const campoRegistroCartaoFidelidade = require('../repositorios/campoRegistroCartaoFidelidade-repositorio');
const Op = model.Sequelize.Op;

class cartaoFidelidadeRepositorio{

    constructor(){}

    async update(id, data) {
        model.CartaoFidelidade.update(data,{
            where: { id: id }   
        });
        let _campoRegistroCartaoFidelidade = new campoRegistroCartaoFidelidade();
        await data.CampoRegistroCartaoFidelidades.forEach(element => {
             _campoRegistroCartaoFidelidade.update(element.id,element);            
        });
    }

    async create(data){  
        model.CartaoFidelidade.create(data,{include: [ model.CampoRegistroCartaoFidelidade]});
     }

     async getById(id) {
        return await model.
        CartaoFidelidade.findByPk(id,{
                attributes: ['id', 'nome', 'descricao','quantidadeMarcacao', 'premio','ativo', 'dataExpiracao','estabelecimentoId'],            
                include: [ { model: model.CampoRegistroCartaoFidelidade, attributes: ['id', 'marcado','data'], required: true}],
                order: [                
                    [{ model: model.CampoRegistroCartaoFidelidade}, 'data',  'ASC']
                ]
            });
      }    

     async buscarPorUsuario(id) {
        return await model.CartaoFidelidade.findAll(
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
        return await model.CartaoFidelidade.findAll(
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

module.exports = cartaoFidelidadeRepositorio;