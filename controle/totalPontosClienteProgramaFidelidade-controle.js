'use strict'

const repositorio = require('../repositorios/TotalPontosClienteProgramaFidelidade-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');


const _repo = new repositorio();


function totalPontosClienteProgramaFidelidadeControle(){

}

totalPontosClienteProgramaFidelidadeControle.prototype.post = async (req, res) =>{    
  let contratoValidacao = new validacao();      
  controleBase.post(_repo, contratoValidacao, req, res);     
};

totalPontosClienteProgramaFidelidadeControle.prototype.update = async (req, res) =>{   
  let contratoValidacao = new validacao();
  controleBase.put(_repo, contratoValidacao, req, res);    
};

totalPontosClienteProgramaFidelidadeControle.prototype.get = async (req, res) =>{    
  controleBase.get(_repo, req, res);
};

totalPontosClienteProgramaFidelidadeControle.prototype.countUsuarioIdAtivo = async (req, res) =>{      
  try {          
    let data = await _repo.getCountUsuarioIdAtivo(req.params.usuarioId);
    res.status(200).send(data);
  } catch (error) {        
      res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
};

totalPontosClienteProgramaFidelidadeControle.prototype.getUsuarioIdAtivo = async (req, res) =>{      
  try {          
    let data = await _repo.getUsuarioIdAtivo(req.params.usuarioId);
    res.status(200).send(data);
  } catch (error) {        
      res.status(500).send({ message: 'Erro no processamento', error: err });
  }   
};

module.exports = totalPontosClienteProgramaFidelidadeControle;