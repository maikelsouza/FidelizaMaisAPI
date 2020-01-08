'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telefone = sequelize.define('Telefone', {
    numero: DataTypes.STRING,
    tipo: {
      type: DataTypes.ENUM,
      values: ['Celular','Fixo']
    }, 
    ativo: DataTypes.BOOLEAN,
    estabelecimentoId: DataTypes.STRING
  }, {});
  Telefone.associate = function(models) {
    Telefone.belongsTo(models.Estabelecimento, {foreignkey : 'estabelecimentoId'});    
  };
  return Telefone;
};