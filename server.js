'use strict'

const app = require('./bin/express');
const variaveis = require('./bin/configuracoes/variaveis');

app.listen(variaveis.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variaveis.Api.port}`);
});