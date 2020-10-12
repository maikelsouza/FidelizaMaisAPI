'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Usuarios', 'telefone',{
      type: Sequelize.STRING,
      allowNull: true,
      after: 'email',
      unique: true
    });  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Usuarios', 'telefone');  
  }
};
