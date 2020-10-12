const model = require('../config/modelLoader');
const Op = model.Sequelize.Op

class usuarioRepositorio{

    constructor(){}


    async create(data){          
        return await model.Usuario.create(data);
     }

    async update(id, data) {
        model.Usuario.update(data,{
            where: { id: id }   
        });
    }

    async updateSenha(id, senha) {
        model.Usuario.update(
            {senha},
            {where: {id}}   
        );
    }

    async getAll() {        
        return await model.
                Usuario.findAll({attributes: ['id', 'nome', 'ativo', 'cpf', 'email', 'telefone'],               
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
                        required: true,                
                        attributes: ['nome'],
                        include: [ 
                            { model: model.Permissoes,                            
                                attributes: ['nome'],
                                required: true                
                            }],
                    }
                ]
            });
    } 

    async getByEmail(email) {
        return await model.
                Usuario.findOne(
                    {attributes: { exclude: ['senha']}, 
                    where:{email} },
                 );
    } 

    async getByEmailENotId(email,id) {
        return await model.
            Usuario.findOne(
                {attributes: { exclude: ['senha']}, 
                where: {  
                    [Op.and]: [
                        {
                            email:{
                                [Op.eq]: email        
                            }
                        },
                        {
                            id:{
                                [Op.ne]: id
                            }
                        }

                    ]                      
                }     
            }                      
        );
        // EXEMPLO:
        // SELECT `id`, `nome`, `sexo`, `email`, `dataNascimento`, `cpf`, `ativo`, `grupoUsuarioId`, `createdAt`, `updatedAt`, `GrupoUsuarioId` 
        // FROM `Usuarios` AS `Usuario` WHERE (`Usuario`.`email` = 'danilo.souza@gmail.com' AND `Usuario`.`id` != 73) LIMIT 1;
    } 

    async getByCpfENotId(cpf,id) {
        return await model.
            Usuario.findOne(
                {attributes: { exclude: ['senha']}, 
                where: {  
                    [Op.and]: [
                        {
                            cpf:{
                                [Op.eq]: cpf        
                            }
                        },
                        {
                            id:{
                                [Op.ne]: id
                            }
                        }

                    ]                      
                }     
            }                      
        );
        // EXEMPLO:
        // SELECT `id`, `nome`, `sexo`, `email`, `dataNascimento`, `cpf`, `ativo`, `grupoUsuarioId`, `createdAt`, `updatedAt`, `GrupoUsuarioId` 
        // FROM `Usuarios` AS `Usuario` WHERE (`Usuario`.`cpf` = '123456789' AND `Usuario`.`id` != 73) LIMIT 1;
    } 

    async getByTelefoneENotId(telefone,id) {
        return await model.
            Usuario.findOne(
                {attributes: { exclude: ['senha']}, 
                where: {  
                    [Op.and]: [
                        {
                            telefone:{
                                [Op.eq]: telefone        
                            }
                        },
                        {
                            id:{
                                [Op.ne]: id
                            }
                        }

                    ]                      
                }     
            }                      
        );
        // EXEMPLO:
        // SELECT `id`, `nome`, `sexo`, `email`, `dataNascimento`, `cpf`, `ativo`, `grupoUsuarioId`, `createdAt`, `updatedAt`, `GrupoUsuarioId` 
        // FROM `Usuarios` AS `Usuario` WHERE (`Usuario`.`telefone` = '123456789' AND `Usuario`.`id` != 73) LIMIT 1;
    } 


    async getByCpf(cpf) {
        return await model.
            Usuario.findOne(
                {attributes: { exclude: ['senha']}, 
                    where: {cpf}   
                }
            ); 
    }      

    async getByTelefone(telefone) {
        return await model.
            Usuario.findOne(
                {attributes: { exclude: ['senha']}, 
                    where: {telefone}   
                }
            ); 
    }      
    
    
    async getById(id) {
        return await model.
        Usuario.findByPk(id,{
                attributes: ['id', 'nome', 'ativo', 'email', 'telefone', 'cpf', 'dataNascimento', 'sexo']
            })
    }

    async getUsuariosSemEstabelecimentosAssociados() {
        return await model.
            Usuario.findAll({attributes: ['id', 'nome'],    
                include: { 
                model: model.GrupoUsuario,               
                attributes: [], 
                required: true,
                where: {
                    nome: 'ESTABELECIMENTOS'
                 }                   
                },    
                where: {
                    [Op.and]: 
                        [model.Sequelize.literal(" not exists (SELECT 1 from Estabelecimentos e where e.usuarioId = Usuario.id ) "),
                        {ativo: true}                   
                    ]
                }                   
            }
        );
    }
}

module.exports = usuarioRepositorio;