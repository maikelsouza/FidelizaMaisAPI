'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
      return queryInterface.bulkInsert('TipoEstabelecimentos', [{
        nome: 'Barbearia',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Café',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Clínica Estética',
        createdAt: new Date(),
        updatedAt: new Date()},                
        {nome: 'Pet',
        createdAt: new Date(),
        updatedAt: new Date()},        
        {nome: 'Lavação',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Loja de Roupa',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Loja de Brinquedos',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Loja de Bebidas',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Loja de Costura',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Pizzaria',
        createdAt: new Date(),
        updatedAt: new Date()},
        {nome: 'Salão Beleza',
        createdAt: new Date(),
        updatedAt: new Date()}, 
        {nome: 'Loja Produtos Naturais',
        createdAt: new Date(),
        updatedAt: new Date()                
      }], {});
    
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
