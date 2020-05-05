'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Usuarios', [{
        nome: 'Maikel Joel de Souza',
        sexo: 'Masculino',
        email: 'maikel.souza@gmail.com',
        dataNascimento: '1979-02-08',
        senha: '26ebbd10de57c7c78d70169dfb3bd69e',
        cpf: '00342683918',
        grupoUsuarioId: 1,
        ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
