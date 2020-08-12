'use strict'

const express = require('express');
const cors = require('cors');
const rota = express.Router();
const utilsRota = require('../bin/utils/utils-rotas');
const controle = require('../controle/totalPontosClienteProgramaFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.options('*', cors(utilsRota.corsOptions));
rota.get('/getUsuarioIdProgramaFidelidadeIdAtivo/:usuarioId/:programaFidelidadeId',cors(utilsRota.corsOptions),autenticador,_ctrl.getUsuarioIdProgramaFidelidadeIdAtivo);
rota.get('/buscarPorIdUsuarioEAtivo/:id/:ativo',cors(utilsRota.corsOptions), autenticador,_ctrl.buscarPorIdUsuarioEAtivo);
rota.post('/', cors(utilsRota.corsOptions),autenticador,_ctrl.post);
rota.put('/:id',autenticador, cors(utilsRota.corsOptions), _ctrl.update);          


module.exports = rota;