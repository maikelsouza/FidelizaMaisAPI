'use strict'

const repositorio = require('../repositorios/estabelecimento-repositorio');
const controleBase = require('../bin/base/controle-base');
const validacao = require('../bin/helpers/validacao');
const _repo = new repositorio();

function estabelecimentoControle() {

}

estabelecimentoControle.prototype.post = async (req, res) => {
  try {
    let contratoValidacao = new validacao();    
    const email = req.body.email;
    const site = req.body.site;
    const cnpj = req.body.cnpj;
    let estabelecimento = null;
    if (email){
      estabelecimento = await _repo.getByEmail(email);
      if (estabelecimento) {
        contratoValidacao.isTrue(true, "Já existe um estabelecimento com esse email!")
      }
    }
    if (site){
      estabelecimento = await _repo.getBySite(site);
      if (estabelecimento) {
        contratoValidacao.isTrue(true, "Já existe um estabelecimento com esse site!")
      }
    }
    if (cnpj){
      estabelecimento = await _repo.getByCnpj(cnpj);
      if (estabelecimento) {
        contratoValidacao.isTrue(true, "Já existe um estabelecimento com esse cnpj!")
      }
    }
    controleBase.post(_repo, contratoValidacao, req, res);        
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }

};

estabelecimentoControle.prototype.put = async (req, res) => {
  console.log('put');
};

estabelecimentoControle.prototype.get = async (req, res) => {
  controleBase.get(_repo, req, res);
};

estabelecimentoControle.prototype.getById = async (req, res) => {
  controleBase.getById(_repo, req, res);
};

estabelecimentoControle.prototype.update = async (req, res) => {
  try {
    let contratoValidacao = new validacao();
    const id = req.body.id;
    const email = req.body.email;
    const site = req.body.site;
    const cnpj = req.body.cnpj;
    let estabelecimento = null;
    if (email) {
      estabelecimento = await _repo.getByEmailNotId(email, id);
      if (estabelecimento) {
        contratoValidacao.isTrue(true, "Já existe um estabelecimento com esse email!")
      }
    }
    if (site) {
      estabelecimento = await _repo.getBySiteNotId(site, id);
      if (estabelecimento) {
        contratoValidacao.isTrue(true, "Já existe um estabelecimento com esse site!")
      }
    }
    if (cnpj) {
      estabelecimento = await _repo.getByCnpjNotId(cnpj, id);
      if (estabelecimento) {
        contratoValidacao.isTrue(true, "Já existe um estabelecimento com esse cnpj!")
      }
    }
    controleBase.put(_repo, contratoValidacao, req, res);
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }
};

estabelecimentoControle.prototype.delete = async (req, res) => {
  controleBase.delete(_repo, req, res);
};

estabelecimentoControle.prototype.buscarPorUsuario = async (req, res) => {
  try {
    let data = await _repo.buscarPorUsuario(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }
};

estabelecimentoControle.prototype.buscarComProgramaFidelidadeOuCartaoFidelidade = async (req, res) => {
  try {
    let data = await _repo.buscarComProgramaFidelidadeOuCartaoFidelidade();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }
};

estabelecimentoControle.prototype.getByEstabelecimentoEEmailCliente = async (req, res) => {
  try {
    let data = await _repo.getByEstabelecimentoEEmailCliente(req.params.id, req.params.email);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }
};

estabelecimentoControle.prototype.buscarClientesAssociadosPorIdEstabelecimento = async (req, res) => {
  try {
    let data = await _repo.buscarClientesAssociadosPorIdEstabelecimento(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Erro no processamento', error: err });
  }
};



module.exports = estabelecimentoControle;