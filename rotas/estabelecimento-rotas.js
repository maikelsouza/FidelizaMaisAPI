'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/estabelecimento-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.get("/", autenticador,_ctrl.get);
rota.get('/:id',autenticador,_ctrl.getById);
rota.post('/', autenticador,_ctrl.post);
rota.put('/:id',autenticador,_ctrl.update);
rota.get('/buscarPorUsuario/:id',autenticador,_ctrl.buscarPorUsuario);


module.exports = rota;