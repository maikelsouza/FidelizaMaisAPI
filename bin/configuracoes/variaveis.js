const variaveis = {
    Api: {
        port: process.env.port || 3000
    },
    DatabaseDesenvolvimento: {
        userName: 'aplicacaod',
        password: 'mkl862',
        dataBase: 'cartaofidelidade',
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    },
    DatabaseDesenvolvimentoRoot: {
        userName: 'root',
        password: 'AQKpza87141',
        dataBase: 'cartaofidelidade',
        host: '127.0.0.1',
        dialect: 'mysql',
        port: 3306
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|7aef61337bcee2fe773aa78b40afacbc'
    }
}
module.exports = variaveis;