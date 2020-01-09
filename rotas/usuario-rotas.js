'use strict'

const express = require('express');
const rota = express.Router();
const controle = require('../controle/usuario-controle');
const autenticador = require('../middlewares/autenticador');
let _ctrl = new controle();

//Public access
rota.post('/autenticar', _ctrl.autenticar);
//rota.post("/register", _ctrl.post);
//rota.get("/register", _ctrl.post);


rota.get("/",autenticador,_ctrl.get);
rota.get('/:id',autenticador, _ctrl.getById);
rota.post('/',  _ctrl.post);
rota.put('/:id',autenticador, _ctrl.update);
//rota.delete('/:id', _ctrl.delete);

module.exports = rota;