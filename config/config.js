
module.exports = {
    "development": {
      "username": "fidelizamais",
      //"username": "root",
      "password": "AQKpza87141",
      "database": "fidelizamais",
      "host": "mysql669.umbler.com",
     //  "host": "127.0.0.1",
      "dialect": "mysql",
      "timezone": "America/Sao_Paulo",
       "port" : "41890"       
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "timezone": "America/Sao_Paulo",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "timezone": "America/Sao_Paulo",
      "dialect": "mysql"
    }
  };