const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class tipoEstabelecimentoRepositorio{

    constructor(){}

    async buscarTodosAtivos() {
        return await model.
            TipoEstabelecimento.findAll({
                attributes: ['id', 'nome'],
                where: {              
                    ativo: {
                        [Op.eq]: true
                     }
                },
                order: [                
                    ['nome', 'ASC']
                ]
            });
     }

}    
module.exports = tipoEstabelecimentoRepositorio; 