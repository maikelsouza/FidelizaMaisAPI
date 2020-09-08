'use strict'

const express = require('express');
const rota = express.Router();
const cors = require('cors');
const utilsRota = require('../bin/utils/utils-rotas');
const controle = require('../controle/clienteEstabelecimento-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.options('*', cors(utilsRota.corsOptions));
rota.get('/buscarPorUsuario/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.buscarPorUsuario);
rota.post('/',cors(utilsRota.corsOptions), autenticador,_ctrl.post);
rota.delete('/:usuarioId/:estabelecimentoId',cors(utilsRota.corsOptions), autenticador, _ctrl.deletePorUsuarioEEstabelecimento);
rota.get('/buscarPorUsuarioIdEEstabelecimentoId/:usuarioId/:estabelecimentoId',cors(utilsRota.corsOptions),autenticador,_ctrl.buscarPorUsuarioIdEEstabelecimentoId);

module.exports = rota;