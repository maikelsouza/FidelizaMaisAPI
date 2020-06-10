'use strict'

const express = require('express');
const cors = require('cors');
const rota = express.Router();
const utilsRota = require('../bin/utils/utils-rotas');
const controle = require('../controle/tipoEstabelecimento-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.options('*', cors(utilsRota.corsOptions));
rota.get("/",cors(utilsRota.corsOptions), autenticador, _ctrl.buscarTodosAtivos);

//rota.get('/:id',_ctrl.getById);


module.exports = rota;