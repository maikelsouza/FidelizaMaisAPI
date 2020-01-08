'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoEstabelecimento = sequelize.define('TipoEstabelecimento', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {});
  TipoEstabelecimento.associate = function(models) {    
    TipoEstabelecimento.hasMany(models.Estabelecimento, {foreignkey : 'tipoEstabelecimentoId'});    
  };
  return TipoEstabelecimento;
};