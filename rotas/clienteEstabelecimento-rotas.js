'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/clienteEstabelecimento-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.get('/buscarPorUsuario/:id',autenticador,_ctrl.buscarPorUsuario);

module.exports = rota;