'use strict';
module.exports = (sequelize, DataTypes) => {
  const MidiaSocial = sequelize.define('MidiaSocial', {
    nome: DataTypes.STRING,
    url: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    estabelecimentoId: DataTypes.STRING
  }, {});
  MidiaSocial.associate = function(models) {
    MidiaSocial.belongsTo(models.Estabelecimento, {foreignkey : 'estabelecimentoId'});    
  };
  return MidiaSocial;
};