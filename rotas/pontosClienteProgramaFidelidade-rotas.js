'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/pontosClienteProgramaFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();

rota.get('/buscarSomatorioPontosProgramaFidelidade/:totalPontosClienteProgramaFidelidadeId',autenticador,_ctrl.buscarSomatorioPontosProgramaFidelidade);
rota.post('/', autenticador,_ctrl.post);



module.exports = rota;