'use strict'

const app = require('../CartaoFidelidadeAPI/bin/express');
const variaveis = require('../CartaoFidelidadeAPI/bin/configuracoes/variaveis');

app.listen(variaveis.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variaveis.Api.port}`);
});