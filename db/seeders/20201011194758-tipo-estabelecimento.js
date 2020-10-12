'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
    return queryInterface.bulkInsert('TipoEstabelecimentos', [{
      nome: 'Loja de Alimentos',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});  
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoEstabelecimentos',{nome: {[Op.eq]: 'Loja de Alimentos'}}, {});  
  }
};
