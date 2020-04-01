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
                where: {  
                    [Op.and]: 
                    [{email: email}, {senha: senha}]
                 },         
                include: [ 
                    { model: model.GrupoUsuario, 
                      //  as: 'grupoUsuario',
                        required: true,                
                        attributes: ['nome'],
                        include: [ 
                            { model: model.Permissoes, 
                           //     as: 'grupoUsuario',
                                attributes: ['nome'],
                                required: true                
                            }],
                    }
                ]
            });
    } 

    async getById(id) {
        return await model.
        Usuario.findByPk(id,{
                attributes: ['id', 'nome', 'ativo', 'email', 'cpf', 'dataNascimento', 'sexo']
            })
    }

    async getUsuariosSemEstabelecimentosAssociados() {
        return await model.
            Usuario.findAll({attributes: ['id', 'nome'],    
                include: { 
                model: model.GrupoUsuario, 
              //  as: 'grupoUsuario',                
                attributes: [], 
                required: true,
                where: {
                    nome: 'ESTABELECIMENTOS'
                 }                   
                },    
                where: {
                    [Op.and]: 
                        [model.Sequelize.literal(" not exists (SELECT 1 from estabelecimentos e where e.usuarioId = Usuario.id ) "),
                        {ativo: true}//,
                      //  {'$grupoUsuario.nome$' : 'ESTABELECIMENTOS'}
                    ]
                }                   
            }
        );
    }
}

module.exports = usuarioRepositorio;