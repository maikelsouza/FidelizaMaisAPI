'use strict'

const repositorio = require('../repositorios/tipoEstabelecimento-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');
const _repo = new repositorio();

function tipoEstabelecimentoControle(){

}

tipoEstabelecimentoControle.prototype.buscarTodosAtivos = async (req, res) =>{     
    try {      
        let data = await _repo.buscarTodosAtivos();
        res.status(200).send(data);
    } catch (error) {        
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }   
};   


module.exports = tipoEstabelecimentoControle;