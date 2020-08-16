'use strict'

const express = require('express');
const rota = express.Router();
const cors = require('cors');
const utilsRota = require('../bin/utils/utils-rotas');
const controle = require('../controle/estabelecimento-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.options('*', cors(utilsRota.corsOptions));
rota.get("/",cors(utilsRota.corsOptions), autenticador,_ctrl.get);
rota.get("/buscarComProgramaFidelidadeOuCartaoFidelidade",cors(utilsRota.corsOptions),autenticador,_ctrl.buscarComProgramaFidelidadeOuCartaoFidelidade);
rota.get('/buscarPorEstabelecimentoEEmailCliente/:id/:email',cors(utilsRota.corsOptions),autenticador,_ctrl.getByEstabelecimentoEEmailCliente);
rota.get('/buscarClientesAssociadosPorIdEstabelecimento/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.buscarClientesAssociadosPorIdEstabelecimento);
rota.get('/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.getById);
rota.get('/buscarPorUsuario/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.buscarPorUsuario);
rota.post('/',cors(utilsRota.corsOptions), autenticador,_ctrl.post);
rota.put('/:id',cors(utilsRota.corsOptions),autenticador,_ctrl.update);


module.exports = rota;