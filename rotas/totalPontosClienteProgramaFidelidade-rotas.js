'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/totalPontosClienteProgramaFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();



rota.get('/getUsuarioIdProgramaFidelidadeIdAtivo/:usuarioId/:programaFidelidadeId',autenticador,_ctrl.getUsuarioIdProgramaFidelidadeIdAtivo);
rota.post('/', autenticador,_ctrl.post);
rota.put('/:id',autenticador, _ctrl.update);          


module.exports = rota;