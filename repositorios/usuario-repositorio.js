const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class usuarioRepositorio{

    constructor(){}


    async create(data){  
        model.Usuario.create(data);
     }

    async update(id, data) {
        model.Usuario.update(data,{
            where: { id: id }   
        });
    }

    async getAll() {
        return await model.
                Usuario.findAll({attributes: ['id', 'nome', 'ativo', 'cpf', 'email'],               
                order: [                
                    ['nome', 'ASC']
                ]
            });
    }

     async getByEmaileSenha(email,senha) {
        return await model.
                Usuario.findAll({attributes: ['id', 'nome', 'ativo','email'],    
                    include: [ { model: model.GrupoUsuario, attributes: ['nome'],required: true},
                    {association: model.GrupoUsuario.Permissoes, attributes: ['nome'], required: true}],
                where: {  
                    [Op.and]: 
                    [{email: email}, {senha: senha}]
                 }         
            });
    } 

    async getById(id) {
        return await model.
        Usuario.findByPk(id,{
                attributes: ['id', 'nome', 'ativo', 'email', 'cpf', 'dataNascimento', 'sexo']
            })
        }

}

module.exports = usuarioRepositorio;