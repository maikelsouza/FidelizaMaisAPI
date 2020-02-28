const model = require('../config/modelLoader');
const enderecoEstabelecimentoRepositorio = require('../repositorios/enderecoEstabelecimento-repositorio');
const telefoneRepositorio = require('../repositorios/telefone-repositorio');
const midiaSocialRepositorio = require('../repositorios/midiaSocial-repositorio');
const Op = model.Sequelize.Op

class estabelecimentoRepositorio{

    

    constructor(){}
    

     async create(data){              
       model.Estabelecimento.create(data, {include: [ model.EnderecoEstabelecimento,
                        model.Telefone, model.MidiaSocial]});
    }

     async getAll() {
        return await model.
            Estabelecimento.findAll({attributes: ['id', 'nome', 'ativo', 'cnpj', 'email'],               
                order: [                
                    ['nome', 'ASC']
                ]
            });
    } 

    async buscarComProgramaFidelidadeOuCartaoFidelidade() {
        return await model.
            Estabelecimento.findAll({attributes: ['id', 'nome', 'ativo', 'cnpj', 'email'],               
            include: [
                {   model: model.ProgramaFidelidade, 
                    as : 'programaFidelidadeAlias',
                    attributes: ['id'], 
                    required: false                  
                },   
                { model: model.CartaoFidelidade,
                  as : 'cartaoFidelidadeAlias',
                  attributes: ['id'],
                  required: false                                 
                },
            ], 
            where : {
                ativo: true,
                [Op.or]:
                [
                    {
                        [Op.and]:
                        [
                            {'$programaFidelidadeAlias.estabelecimentoId$' : {[Op.not]: null }},
                            {'$programaFidelidadeAlias.ativo$' : true}
                        ]
                    },
                    {
                        [Op.and]:
                        [
                            {'$cartaoFidelidadeAlias.estabelecimentoId$' : {[Op.not]: null }},
                            {'$cartaoFidelidadeAlias.ativo$' : true}
                        ]
                    }
                ]   
                },  
            group: ['Estabelecimento.id', 'Estabelecimento.nome', 'Estabelecimento.ativo', 
                    'Estabelecimento.cnpj', 'Estabelecimento.email']
            }
        );
    }

    async getById(id) {
            return await model.
                Estabelecimento.findByPk(id,{
                    attributes: ['id', 'nome', 'ativo', 'email', 'cnpj', 'tipoEstabelecimentoId'],                                            
                     include: [
                        { model: model.EnderecoEstabelecimento,                                 
                          attributes: ['id','rua','numero','cep','complemento','bairro','cidade','uf','pais'], 
                          paranoid: false, 
                          required: true} ,                       
                        { model: model.Telefone,
                                attributes: ['id', 'numero','tipo'], 
                                paranoid: false, 
                                required: false}, 
                         { model: model.MidiaSocial,
                                attributes: ['id', 'nome','url'], 
                                paranoid: false, 
                                 required: false} ,                              
                    ]
                })
            }
        
        // Rever essa maneira de fazer update. Não está bom. (Avaliar situação onde exclui e depois insere. Não esquecer do controle de transação 
        // ver programaFidelidade-repositorio.js - update)
        async update(id, data) {
           model.Estabelecimento.update(data,{
                    where: { id: id }   
                });
                let _enderecoEstabelecimentoRepositorio = new enderecoEstabelecimentoRepositorio();
                await _enderecoEstabelecimentoRepositorio.update(data.EnderecoEstabelecimentos.id,data.EnderecoEstabelecimentos);
                await this.saveOrUpdadeTelefone(data.telefone,id);                
                await this.saveOrUpdadeMidiaSocial(data.midiaSocial,id);                            
         }

         async delete(id) {             
            model.Estabelecimento.destroy({
                      where: { 
                          id: id 
                        }   
                    });        
            }

        async buscarPorUsuario(id) {
            return await model.Estabelecimento.findAll(
                {attributes: ['id', 'nome', 'ativo', 'cnpj', 'email'],
                    where: {  
                        [Op.and]: 
                        [{usuarioId: id}, {ativo: true}]
                    },
                    order: [                
                        ['nome', 'ASC']
                    ]
                });          
            }

         async saveOrUpdadeTelefone(telefone, id){
                let _telefoneRepositorio = new telefoneRepositorio();
                let telefone1 = {
                    id : telefone.telefoneId1,
                    numero : telefone.telefoneNumero1,
                    tipo : telefone.telefoneTipo1,
                    estabelecimentoId : id
                }
                let telefone2 = {
                    id : telefone.telefoneId2,
                    numero : telefone.telefoneNumero2,
                    tipo : telefone.telefoneTipo2,
                    estabelecimentoId : id
                }
                let telefone3 = {
                    id : telefone.telefoneId3,
                    numero : telefone.telefoneNumero3,
                    tipo : telefone.telefoneTipo3 ,
                    estabelecimentoId : id
                }
                if (telefone1.id != null){ // Se existe id, então atualiza o telefone
                    await _telefoneRepositorio.update(telefone1.id,telefone1);                    
                }else{ // Caso não tenha id, então verifica se tem número e num caso positivo, então salva um telefone
                    if (telefone1.numero != null){
                        await _telefoneRepositorio.create(telefone1);
                    }
                }
                if (telefone2.id != null){ // Se existe id, então atualiza o telefone
                    await _telefoneRepositorio.update(telefone2.id,telefone2);                    
                }else{ // Caso não tenha id, então verifica se tem número e num caso positivo, então salva um telefone
                    if (telefone2.numero != null){                        
                        await _telefoneRepositorio.create(telefone2);
                    }
                }
                if (telefone3.id != null){ // Se existe id, então atualiza o telefone
                    await _telefoneRepositorio.update(telefone3.id,telefone3);                    
                }else{ // Caso não tenha id, então verifica se tem número e num caso positivo, então salva um telefone
                    if (telefone3.numero != null){
                        await _telefoneRepositorio.create(telefone3);
                    }
                }
         }

         async saveOrUpdadeMidiaSocial(midiaSocial, id){
            let _midiaSocialRepositorio = new midiaSocialRepositorio();
            let midiaSocial1 = {
                id : midiaSocial.midiaSocialId1,
                nome : midiaSocial.midiaSocialNome1,
                url : midiaSocial.midiaSocialUrl1,
                estabelecimentoId : id
            }
            let midiaSocial2 = {
                id : midiaSocial.midiaSocialId2,
                nome : midiaSocial.midiaSocialNome2,
                url : midiaSocial.midiaSocialUrl2,
                estabelecimentoId : id
            }
            let midiaSocial3 = {
                id : midiaSocial.midiaSocialId3,
                nome : midiaSocial.midiaSocialNome3,
                url : midiaSocial.midiaSocialUrl3,
                estabelecimentoId : id
            }
            if (midiaSocial1.id != null){ // Se existe id, então atualiza o midia social
                await _midiaSocialRepositorio.update(midiaSocial1.id,midiaSocial1);                    
            }else{ // Caso não tenha id, então verifica se tem nome e num caso positivo, então salva uma midia social
                if (midiaSocial1.nome != null){
                    await _midiaSocialRepositorio.create(midiaSocial1);
                }
            }
            if (midiaSocial2.id != null){ // Se existe id, então atualiza o midia social
                await _midiaSocialRepositorio.update(midiaSocial2.id,midiaSocial2);                    
            }else{ // Caso não tenha id, então verifica se tem nome e num caso positivo, então salva uma midia social
                if (midiaSocial2.nome != null){                    
                    await _midiaSocialRepositorio.create(midiaSocial2);
                }
            }
            if (midiaSocial3.id != null){ // Se existe id, então atualiza o midia social
                await _midiaSocialRepositorio.update(midiaSocial3.id,midiaSocial3);                    
            }else{ // Caso não tenha id, então verifica se tem nome e num caso positivo, então salva uma midia social
                if (midiaSocial3.nome != null){
                    await _midiaSocialRepositorio.create(midiaSocial3);
                }
            }
     }

    }

module.exports = estabelecimentoRepositorio;
