'use strict'

const express = require('express');
const cors = require('cors');
const rota = express.Router();
const controle = require('../controle/usuario-controle');
const autenticador = require('../middlewares/autenticador');
const utilsRota = require('../bin/utils/utils-rotas');
let _ctrl = new controle();


  
//Public access
rota.post('/autenticar', cors(utilsRota.corsOptions), _ctrl.autenticar);

rota.options('*', cors(utilsRota.corsOptions));
rota.get("/",cors(utilsRota.corsOptions),autenticador,_ctrl.get);                                  
rota.get("/buscarPorEmail/:email",cors(utilsRota.corsOptions),_ctrl.getByEmail);
rota.get('/buscarSemEstabelecimentosAssociados',cors(utilsRota.corsOptions),autenticador, _ctrl.getUsuariosSemEstabelecimentosAssociados);
rota.get('/:id',cors(utilsRota.corsOptions),autenticador, _ctrl.getById);
rota.post('/',cors(utilsRota.corsOptions),autenticador, _ctrl.post);
rota.put('/:id',cors(utilsRota.corsOptions), autenticador,_ctrl.update);
rota.put('/atualizarSenha/:id',cors(utilsRota.corsOptions), _ctrl.updateSenha);
rota.put('/gerarNovaSenha/:id',cors(utilsRota.corsOptions),_ctrl.gerarNovaSenha);           


module.exports = rota;