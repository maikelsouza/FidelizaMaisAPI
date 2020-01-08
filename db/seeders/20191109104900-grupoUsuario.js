'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('GrupoUsuarios', [{
        nome: 'ADMINISTRADOR',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'CLIENTES',
        createdAt: new Date(),
        updatedAt: new Date()}
      ], {});  
  },

  down: (queryInterface, Sequelize) => {   
      return queryInterface.bulkDelete('GrupoUsuarios', null, {});   
  }
};
