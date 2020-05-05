'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,        
      },
      sexo: {
        type: Sequelize.ENUM('Masculino','Feminino'),
        allowNull: false,        
        defaultValue: 'Masculino'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dataNascimento: {
        type: Sequelize.DATEONLY
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      grupoUsuarioId: {
        type: Sequelize.INTEGER,        
        allowNull: false,
        references: {
          model: "GrupoUsuarios",
          key: "id",
          as: "grupoUsuarioId"          
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuarios');
  }
};