const variaveis = require('./variaveis');
const Sequelize = require('sequelize');

const dataBase = variaveis.DatabaseDesenvolvimentoRoot;

const sequelize = new Sequelize(dataBase.dataBase,dataBase.userName,dataBase.password,{
    dialect : dataBase.dialect,
    port: dataBase.port    
})

module.exports = sequelize;