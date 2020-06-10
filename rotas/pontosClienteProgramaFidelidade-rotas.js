'use strict'

const express = require('express');
const rota = express.Router();
const cors = require('cors');
const utilsRota = require('../bin/utils/utils-rotas');
const controle = require('../controle/pontosClienteProgramaFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.options('*', cors(utilsRota.corsOptions));
rota.get('/buscarSomatorioPontosProgramaFidelidade/:totalPontosClienteProgramaFidelidadeId',cors(utilsRota.corsOptions), autenticador,_ctrl.buscarSomatorioPontosProgramaFidelidade);
rota.post('/',cors(utilsRota.corsOptions),  autenticador,_ctrl.post);



module.exports = rota;