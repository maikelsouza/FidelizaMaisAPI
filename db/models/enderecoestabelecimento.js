'use strict';
module.exports = (sequelize, DataTypes) => {
  const EnderecoEstabelecimento = sequelize.define('EnderecoEstabelecimento', {
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    pais: DataTypes.STRING,
    LinkMaps: DataTypes.STRING   
  }, {});
  EnderecoEstabelecimento.associate = function(models) {
    EnderecoEstabelecimento.Estabelecimento = EnderecoEstabelecimento.belongsTo(models.Estabelecimento, {foreignkey : 'estabelecimentoId'});
  };
  return EnderecoEstabelecimento;
};