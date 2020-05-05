'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Estabelecimentos', {
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
      linkLogo: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      site: {
        type: Sequelize.STRING,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      tipoEstabelecimentoId: {
        type: Sequelize.INTEGER,        
        allowNull: false,
        references: {
          model: "TipoEstabelecimentos",
          key: "id",
          as: "tipoEstabelecimentoId"          
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
      }
      
     
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Estabelecimentos');
  }
};