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
        type: Sequelize.DOUBLE,
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
      totalPontosClienteProgramaFidelidadeId: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references: {
          model: "TotalPontosClienteProgramaFidelidades",
          key: "id",
          as: "totalPontosClienteProgramaFidelidadeId"          
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