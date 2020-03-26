'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/totalPontosClienteProgramaFidelidade-controle');
const autenticador = require('../middlewares/autenticador');

let _ctrl = new controle();



rota.get('/countUsuarioIdAtivo/:usuarioId',autenticador,_ctrl.countUsuarioIdAtivo);
rota.get('/getUsuarioIdAtivo/:usuarioId',autenticador,_ctrl.getUsuarioIdAtivo);
rota.post('/', autenticador,_ctrl.post);

           


module.exports = rota;