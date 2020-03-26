'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TotalPontosClienteProgramaFidelidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPontos: {
        type: Sequelize.INTEGER,
        allowNull: false
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
      programaFidelidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,            
        references: {
          model: "ProgramaFidelidades",
          key: "id",
          as: "programaFidelidadeId"          
        }
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      dataResgate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TotalPontosClienteProgramaFidelidades');
  }
};