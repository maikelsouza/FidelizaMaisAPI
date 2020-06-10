'use strict'

const express = require('express');
const rota = express.Router();
const cors = require('cors');
const utilsRota = require('../bin/utils/utils-rotas');
const controle = require('../controle/cartaoFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.options('*', cors(utilsRota.corsOptions));
rota.get("/",cors(utilsRota.corsOptions),autenticador, _ctrl.get);
rota.get('/buscarPorUsuario/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.buscarPorUsuario);
rota.get('/buscarPorEstabelecimento/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.buscarPorEstabelecimento);
rota.get('/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.getById);
rota.post('/',cors(utilsRota.corsOptions), autenticador,_ctrl.post);
rota.put('/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.update);


module.exports = rota;