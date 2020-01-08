'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CampoRegistroCartaoFidelidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marcado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cartaoFidelidadeId: {
        type: Sequelize.INTEGER,    
        onDelete: "CASCADE",    
        allowNull: false,
        references: {
          model: "CartaoFidelidades",
          key: "id",
          as: "cartaoFidelidadeId"          
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CampoRegistroCartaoFidelidades');
  }
};