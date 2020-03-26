'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/totalPontosClienteProgramaFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();



rota.get('/getUsuarioIdAtivo/:usuarioId',autenticador,_ctrl.getUsuarioIdAtivo);
rota.post('/', autenticador,_ctrl.post);
rota.put('/:id',autenticador, _ctrl.update);          


module.exports = rota;