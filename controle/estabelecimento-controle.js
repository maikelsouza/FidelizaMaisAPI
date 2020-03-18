'use strict'

const repositorio = require('../repositorios/estabelecimento-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');
const _repo = new repositorio();

function estabelecimentoControle(){

}

estabelecimentoControle.prototype.post = async (req, res) =>{    
  let contratoValidacao = new validacao();
  //contratoValidacao.isRequired(req.body.nome, 'O Nome é obrigatório');
  //contratoValidacao.isRequired(req.body.email, 'O E-mail é obrigatório');  
 // contratoValidacao.isEmail(req.body.email, 'E-mail informado é inválido');  
  controleBase.post(_repo, contratoValidacao, req, res);
     //let resultado =  await new repositorio().create(req.body);
};

estabelecimentoControle.prototype.put = async (req, res) =>{ 
    console.log('put');
};

estabelecimentoControle.prototype.get = async (req, res) =>{    
  controleBase.get(_repo, req, res);
};

estabelecimentoControle.prototype.getById = async (req, res) =>{ 
    controleBase.getById(_repo, req, res);
};

estabelecimentoControle.prototype.update = async (req, res) =>{   
  let contratoValidacao = new validacao();
  controleBase.put(_repo, contratoValidacao, req, res);    
};

estabelecimentoControle.prototype.delete = async (req, res) =>{     
  controleBase.delete(_repo, req, res);    
};

estabelecimentoControle.prototype.buscarPorUsuario = async (req, res) =>{     
  try {           
    let data = await _repo.buscarPorUsuario(req.params.id);
    res.status(200).send(data);
  } catch (error) {      
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }    
}; 

estabelecimentoControle.prototype.buscarComProgramaFidelidadeOuCartaoFidelidade = async (req, res) =>{     
  try {           
    let data = await _repo.buscarComProgramaFidelidadeOuCartaoFidelidade();
    res.status(200).send(data);
  } catch (error) {      
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }    
};  

estabelecimentoControle.prototype.getByEstabelecimentoEEmailCliente = async (req, res) =>{ 
  try {      
    let data = await _repo.getByEstabelecimentoEEmailCliente(req.params.id,req.params.email);    
    res.status(200).send(data);
    } catch (error) {       
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};


module.exports = estabelecimentoControle;