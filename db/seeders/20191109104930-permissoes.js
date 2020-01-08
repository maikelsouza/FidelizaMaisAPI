'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Permissoes', [{
        nome: 'LISTA_ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        grupoUsuarioId: 1},
        {nome: 'EDITAR_ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        grupoUsuarioId: 1},
        {nome: 'CADASTRAR_ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        grupoUsuarioId: 1},
        {nome: 'LISTA_ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        grupoUsuarioId: 2},
        {nome: 'EDITAR_ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        grupoUsuarioId: 2},
        {nome: 'LISTA_ESTABELECIMENTOS',
        createdAt: new Date(),
        updatedAt: new Date(),
        grupoUsuarioId: 3},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
