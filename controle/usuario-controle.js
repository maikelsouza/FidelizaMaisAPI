'use strict'

const repositorio = require('../repositorios/usuario-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');
const variaveis = require('../bin/configuracoes/variaveis');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const _repo = new repositorio();


function usuarioControle(){

}

usuarioControle.prototype.post = async (req, res) =>{    
  let contratoValidacao = new validacao();    
  req.body.senha = md5(req.body.senha);
  controleBase.post(_repo, contratoValidacao, req, res);     
};

usuarioControle.prototype.put = async (req, res) =>{ 
    
};

usuarioControle.prototype.get = async (req, res) =>{    
  controleBase.get(_repo, req, res);
};

usuarioControle.prototype.getById = async (req, res) =>{ 
    controleBase.getById(_repo, req, res);
};

usuarioControle.prototype.getUsuariosSemEstabelecimentosAssociados = async (req, res) =>{ 
  try {              
    const data = await _repo.getUsuariosSemEstabelecimentosAssociados();
    res.status(200).send(data);
  } catch (error) {        
      res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
};

usuarioControle.prototype.update = async (req, res) =>{   
  let contratoValidacao = new validacao();
  controleBase.put(_repo, contratoValidacao, req, res);    
};

usuarioControle.prototype.autenticar = async (req, res) => {

  let _validationContract = new validacao();
  if (!_validationContract.isValid()) {
      res.status(400).send({ message: 'Não foi possível efetuar o login', validacao: _validationContract.errors() })
      return;
  }
  
  let usuarioEncontrado = await _repo.getByEmaileSenha(req.body.email, md5(req.body.senha));  
  if (usuarioEncontrado.length > 0) {    
       res.status(200).send({
          usuario: usuarioEncontrado,
          token: jwt.sign({ user: usuarioEncontrado }, variaveis.Security.secretyKey)
      }) 
  } else {
      res.status(404).send({ message: 'Usuário e senha informado são inválido!' });
  }
}


module.exports = usuarioControle;