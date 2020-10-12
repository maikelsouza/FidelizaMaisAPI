'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Usuarios', 'email',{
      type: Sequelize.STRING,
      allowNull: true
    });    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Usuarios', 'email',{
      type: Sequelize.STRING,
      allowNull: false,
        unique: true
    });    
  }
};
