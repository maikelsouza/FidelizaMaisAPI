'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProgramaFidelidades', {
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
      dataExpiracao: {
        type: Sequelize.DATE
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      regra: {
        type: Sequelize.INTEGER,
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
      usuarioId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: true,
        references: {
          model: "Usuarios",
          key: "id",
          as: "usuarioId"          
        }
      },  
      estabelecimentoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "Estabelecimentos",
          key: "id",
          as: "estabelecimentoId"          
        }
      }  
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProgramaFidelidades');
  }
};