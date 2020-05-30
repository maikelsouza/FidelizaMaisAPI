'use strict'

const app = require('../FidelizaMaisAPI/bin/express');
const variaveis = require('../FidelizaMaisAPI/bin/configuracoes/variaveis');

app.listen(variaveis.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variaveis.Api.port}`);
});