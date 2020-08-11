'use strict'

const express = require('express');
const cors = require('cors');
const rota = express.Router();
const controle = require('../controle/email-controle');
const _autenticador = require('../middlewares/autenticador');
const utilsRota = require('../bin/utils/utils-rotas');

let _ctrl = new controle();  

rota.options('*', cors(utilsRota.corsOptions));

rota.post('/enviarEmail',cors(utilsRota.corsOptions),_autenticador, _ctrl.enviarEmail);

module.exports = rota;