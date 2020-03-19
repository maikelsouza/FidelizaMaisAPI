'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PontosClienteProgramaFidelidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pontos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dataPontuacao: {
        type: Sequelize.DATE,        
        allowNull: false
      },
       ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
    return queryInterface.dropTable('PontosClienteProgramaFidelidades');
  }
};