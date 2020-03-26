'use strict';
module.exports = (sequelize, DataTypes) => {
  const PontosClienteProgramaFidelidade = sequelize.define('PontosClienteProgramaFidelidade', {
    pontos: DataTypes.NUMBER,
    dataPontuacao: DataTypes.DATE,
    ativo: DataTypes.BOOLEAN,
    totalPontosClienteProgramaFidelidadeId: DataTypes.NUMBER
  }, {});
  PontosClienteProgramaFidelidade.associate = function(models) {
    this.belongsTo(models.TotalPontosClienteProgramaFidelidade, {foreignkey : 'totalPontosClienteProgramaFidelidadeId'});
  };
  return PontosClienteProgramaFidelidade;
};