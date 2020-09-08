'use strict'

const repositorio = require('../repositorios/clienteEstabelecimento-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');
const _repo = new repositorio();

function clienteEstabelecimentoControle(){

}

clienteEstabelecimentoControle.prototype.post = async (req, res) =>{    
  let contratoValidacao = new validacao();
  controleBase.post(_repo, contratoValidacao, req, res);
};

clienteEstabelecimentoControle.prototype.buscarPorUsuario = async (req, res) =>{     
  try {           
    let data = await _repo.buscarPorUsuario(req.params.id);
    res.status(200).send(data);
  } catch (error) {      
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }    
};

clienteEstabelecimentoControle.prototype.deletePorUsuarioEEstabelecimento = async (req, res) =>{   
  try {      
    let usuarioId = req.params.usuarioId;
    let estabelecimentoId = req.params.estabelecimentoId;
    await _repo.deletePorUsuarioEEstabelecimento(usuarioId,estabelecimentoId);  
    res.status(200).send({ message: 'Registro excluído com sucesso!' });
  } catch (error) {      
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }    
};

clienteEstabelecimentoControle.prototype.buscarPorUsuarioIdEEstabelecimentoId = async (req, res) =>{     
  try {
    const usuarioId = req.params.usuarioId;
    const estabelecimentoId = req.params.estabelecimentoId;           
    const data = await _repo.buscarPorUsuarioIdEEstabelecimentoId(usuarioId,estabelecimentoId);
    res.status(200).send(data);
  } catch (error) {      
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }    
};





module.exports = clienteEstabelecimentoControle;