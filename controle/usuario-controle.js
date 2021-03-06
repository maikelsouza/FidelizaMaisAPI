'use strict'

const repositorio = require('../repositorios/usuario-repositorio');
const controleBase = require('../bin/base/controle-base');
const emailControle = require('./email-controle');
const validacao = require('../bin/helpers/validacao');
const variaveis = require('../bin/configuracoes/variaveis');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const _repo = new repositorio();


function usuarioControle(){

}

usuarioControle.prototype.post = async (req, res) => {
  let contratoValidacao = new validacao();
  try {
    const cpf = req.body.cpf;
    const email = req.body.email;
    const telefone = req.body.telefone;
    let usuario = null;
    if (email != null && email.trim() != ''){
      usuario = await _repo.getByEmail(email)
      if (usuario) {
        contratoValidacao.isTrue(true, "Já existe um usuário com esse email!")
      }      
    }
    if (cpf) {
      usuario = await _repo.getByCpf(cpf)
      if (usuario) {
        contratoValidacao.isTrue(true, "Já existe um usuário com esse cpf")
      }
    }
    if (telefone != null && telefone.trim() != ''){
      usuario = await _repo.getByTelefone(telefone);
      if (usuario) {
        contratoValidacao.isTrue(true, "Já existe um usuário com esse telefone!")
      }   
    }
   req.body.senha = md5(req.body.senha);
   req.body.telefone = setNullTelefoneEmBranco(req.body.telefone);
   controleBase.post(_repo, contratoValidacao, req, res);    
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }
};

usuarioControle.prototype.put = async (req, res) =>{ 
    
};

usuarioControle.prototype.get = async (req, res) =>{    
  controleBase.get(_repo, req, res);
};

usuarioControle.prototype.getById = async (req, res) =>{ 
    controleBase.getById(_repo, req, res);
};

usuarioControle.prototype.getByEmail = async (req, res) =>{ 
  try {              
    const data = await _repo.getByEmail(req.params.email)
    res.status(200).send(data);
  } catch (error) {        
      res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
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
  try {
    const cpf = req.body.cpf;
    const id = req.body.id;    
    const email = req.body.email;
    const telefone = req.body.telefone;
    let usuario = null;
    if (email != null && email.trim() != ''){
      usuario = await _repo.getByEmailENotId(email,id);
      if (usuario) {
        contratoValidacao.isTrue(true, "Já existe um usuário com esse email!")
      }      
    }
    if (cpf) {
      usuario = await _repo.getByCpfENotId(cpf,id)
      if (usuario) {
        contratoValidacao.isTrue(true, "Já existe um usuário com esse cpf");
      }
    }
    if (telefone != null && telefone.trim() != ''){
      usuario = await _repo.getByTelefoneENotId(telefone,id);
      if (usuario) {
        contratoValidacao.isTrue(true, "Já existe um usuário com esse telefone!")
      }      
    } 
    req.body.telefone = setNullTelefoneEmBranco( req.body.telefone);
    controleBase.put(_repo, contratoValidacao, req, res);    
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
};


usuarioControle.prototype.updateSenha = async (req, res) =>{     
  try {              
    if (req.body.senha != null){
      req.body.senha = md5(req.body.senha);
    }
    const data = await _repo.updateSenha(req.params.id,req.body.senha);  
    res.status(200).send(data);
  } catch (error) {        
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
};

usuarioControle.prototype.autenticar = async (req, res) => {  

  let usuarioEncontrado = await _repo.getByEmaileSenha(req.body.email, md5(req.body.senha));  
  if (usuarioEncontrado.length > 0) {        
    let contratoValidacao = new validacao();    
    contratoValidacao.isFalse(usuarioEncontrado[0].ativo,"O usuário está inativo!")

    if (!contratoValidacao.isValid()) {
      res.status(400).send({ message: 'Não foi possível efetuar o login', validation: contratoValidacao.errors() })
      return;
    }
    
    res.status(200).send({
          usuario: usuarioEncontrado,
          token: jwt.sign({ user: usuarioEncontrado }, variaveis.Security.secretyKey)
      }) 
  } else {
      res.status(404).send({ message: 'Usuário inexistente ou senha incorreta!' });
  }
};

usuarioControle.prototype.gerarNovaSenha = async (req, res) =>{     
  try { 
    const senha = gerarSenha();        
    await _repo.updateSenha(req.params.id,md5(senha));  
    let _emailControle = new emailControle();
    req.body.senha = senha;   
    req.body.text = req.body.text + ' '  + req.body.senha;
    const data = await _emailControle.enviarEmail(req, res);    
    res.status(200).send(data);
  } catch (error) {        
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
};

function gerarSenha() {
  let senha = '';
  let numeros = [];
  for (let index = 0; index < 6; index++) {
    numeros.push(Math.floor(Math.random() * 10));
  }
  return senha.concat(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5]);
};

function setNullTelefoneEmBranco(telefone){
  if (telefone == null){
    return telefone;    
  }
  return  telefone.trim() === '' ? null : telefone;
}

module.exports = usuarioControle;