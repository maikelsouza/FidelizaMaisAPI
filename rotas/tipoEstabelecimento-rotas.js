'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/tipoEstabelecimento-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.get("/",autenticador, _ctrl.buscarTodosAtivos);
//rota.get('/:id',_ctrl.getById);
//rota.post('/', _ctrl.post);


module.exports = rota;