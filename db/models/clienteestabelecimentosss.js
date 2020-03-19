'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClienteEstabelecimento = sequelize.define('ClienteEstabelecimento', {
    ativo: DataTypes.BOOLEAN,
    dataCriacao: DataTypes.DATE,
    usuarioId: DataTypes.INTEGER,
    estabelecimentoId: DataTypes.INTEGER
  }, {});
  ClienteEstabelecimento.associate = function(models) {
 //   ClienteEstabelecimento.Estabelecimento = ClienteEstabelecimento.hasMany(models.Estabelecimento, { foreignkey : 'estabelecimentoId'});
 //   ClienteEstabelecimento.Usuario = ClienteEstabelecimento.hasMany(models.Usuario, { foreignkey : 'usuarioId'});
  };
  return ClienteEstabelecimento;
};