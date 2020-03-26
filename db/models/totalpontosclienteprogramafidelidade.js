'use strict';
module.exports = (sequelize, DataTypes) => {
  const TotalPontosClienteProgramaFidelidade = sequelize.define('TotalPontosClienteProgramaFidelidade', {
    totalPontos: DataTypes.NUMBER,
    usuarioId: DataTypes.NUMBER,
    programaFidelidadeId: DataTypes.NUMBER,
    ativo: DataTypes.BOOLEAN,
    dataResgate: DataTypes.DATE
  }, {});
  TotalPontosClienteProgramaFidelidade.associate = function(models) {
    this.belongsTo(models.Usuario, {foreignkey : 'usuarioId'});
    this.hasMany(models.PontosClienteProgramaFidelidade, {foreignkey : 'totalPontosClienteProgramaFidelidadeId'});
  };
  return TotalPontosClienteProgramaFidelidade;
};