const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('../config/config.js');

const dataBases = require('../bin/configuracoes/variaveis');

const db = {};

//const dataBase = dataBases.DatabaseDesenvolvimento
//routers
const estabelecimentoRota = require('../rotas/estabelecimento-rotas');
const tipoEstabelecimentoRota = require('../rotas/tipoEstabelecimento-rotas');
const usuarioRota = require('../rotas/usuario-rotas');
const cartaoFidelidadeRota = require('../rotas/cartaoFidelidade-rotas');
const programaFidelidadeRota = require('../rotas/programaFidelidade-rotas');
const clienteEstabelecimentoRota = require('../rotas/clienteEstabelecimento-rotas');
const pontosClienteProgramaFidelidadeRota = require('../rotas/pontosClienteProgramaFidelidade-rotas');
const totalPontosClienteProgramaFidelidadeRota = require('../rotas/totalPontosClienteProgramaFidelidade-rotas');
const emailRota = require('../rotas/email-rota');

//const usuarioRouter = require('../routes/usuario-router');

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configurando a conexão com banco de dados
//const sequelize = new Sequelize(dataBase.dataBase,dataBase.userName,dataBase.password,{
 //   dialect : dataBase.dialect,
  //  port: dataBase.port    
//})

const sequelize = new Sequelize(config.development);

app.sequelize = sequelize;
app.Sequelize = Sequelize;


//Configurando as rotas
app.use('/api/estabelecimento', estabelecimentoRota);
app.use('/api/tipoEstabelecimento', tipoEstabelecimentoRota);
app.use('/api/usuario', usuarioRota);
app.use('/api/cartaoFidelidade', cartaoFidelidadeRota);
app.use('/api/programaFidelidade', programaFidelidadeRota);
app.use('/api/clienteEstabelecimento', clienteEstabelecimentoRota);
app.use('/api/pontosClienteProgramaFidelidade', pontosClienteProgramaFidelidadeRota);
app.use('/api/totalPontosClienteProgramaFidelidade', totalPontosClienteProgramaFidelidadeRota);
app.use('/api/email', emailRota);





//Exportando nossa Api
module.exports = app;


// Api -> MIDDLEWARES -> Rotas -> Controle -> Repositorio -> Banco