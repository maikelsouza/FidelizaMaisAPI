const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class clienteEstabelecimentoRepositorio{
    

    constructor(){}    

     async create(data){              
       model.ClienteEstabelecimento.create(data);
    }

    async buscarPorUsuario(id) {                           
        return await model.ClienteEstabelecimento.findAll(
            {attributes: ['id', 'estabelecimentoId'],                                 
                 where: {  
                    [Op.and]: 
                    [{usuarioId: id}, {ativo: true}]
                },                   
            }
        );          
    }

    async buscarPorUsuarioIdEEstabelecimentoId(usuarioId, estabelecimentoId) {                           
        return await model.ClienteEstabelecimento.findOne(
            {attributes: ['id', 'estabelecimentoId', 'usuarioId', 'dataCriacao'],                                 
                 where: {  
                    [Op.and]: 
                    [{usuarioId: usuarioId}, {estabelecimentoId: estabelecimentoId}]
                },                   
            }
        );          
    }

    async deletePorUsuarioEEstabelecimento(usuarioId, estabelecimentoId) {             
        model.ClienteEstabelecimento.destroy({
                where: { 
                    [Op.and]: 
                    [{usuarioId: usuarioId}, {estabelecimentoId: estabelecimentoId}]
                }   
            });        
        }
    }   
      
    

   

module.exports = clienteEstabelecimentoRepositorio;
