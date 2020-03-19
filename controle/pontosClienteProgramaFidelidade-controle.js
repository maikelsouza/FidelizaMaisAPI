'use strict'

const repositorio = require('../repositorios/pontosClienteProgramaFidelidade-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');


const _repo = new repositorio();


function pontosClienteProgramaFidelidadeControle(){

}

pontosClienteProgramaFidelidadeControle.prototype.post = async (req, res) =>{    
  let contratoValidacao = new validacao();      
  controleBase.post(_repo, contratoValidacao, req, res);     
};

pontosClienteProgramaFidelidadeControle.prototype.put = async (req, res) =>{ 
    
};

pontosClienteProgramaFidelidadeControle.prototype.get = async (req, res) =>{    
  controleBase.get(_repo, req, res);
};

module.exports = pontosClienteProgramaFidelidadeControle;