'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClienteEstabelecimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      dataCriacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      estabelecimentoId: {
        type: Sequelize.INTEGER,            
        allowNull: false,
        references: {
          model: "Estabelecimentos",
          key: "id",
          as: "estabelecimentoId"          
        }
      },
      usuarioId: {
        type: Sequelize.INTEGER,            
        allowNull: false,
        references: {
          model: "Usuarios",
          key: "id",
          as: "usuarioId"          
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClienteEstabelecimentos');
  }
};