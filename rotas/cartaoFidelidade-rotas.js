'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/cartaoFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();
rota.get("/", _ctrl.get);
rota.get('/buscarPorUsuario/:id',_ctrl.buscarPorUsuario);
rota.get('/buscarPorEstabelecimento/:id',_ctrl.buscarPorEstabelecimento);
rota.get('/:id',_ctrl.getById);
rota.post('/', _ctrl.post);
rota.put('/:id',_ctrl.update);


module.exports = rota;