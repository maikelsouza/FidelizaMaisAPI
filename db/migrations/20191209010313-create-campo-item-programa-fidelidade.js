'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CampoItemProgramaFidelidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(500)
      },
      quantidadePontos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },   
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      dataExpiracao: {
        type: Sequelize.DATEONLY
      },        
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      programaFidelidadeId: {
        type: Sequelize.INTEGER,    
        onDelete: "CASCADE",    
        allowNull: false,
        references: {
          model: "ProgramaFidelidades",
          key: "id",
          as: "programaFidelidadeId"          
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CampoItemProgramaFidelidades');
  }
};