'use strict';
module.exports = (sequelize, DataTypes) => {
  const PontosClienteProgramaFidelidade = sequelize.define('PontosClienteProgramaFidelidade', {
    pontos: DataTypes.NUMBER,
    dataPontuacao: DataTypes.DATE,
    usuarioId: DataTypes.NUMBER,
    ativo: DataTypes.BOOLEAN,
    programaFidelidadeId: DataTypes.NUMBER
  }, {});
  PontosClienteProgramaFidelidade.associate = function(models) {
    this.belongsTo(models.Usuario, {foreignkey : 'usuarioId'});
  };
  return PontosClienteProgramaFidelidade;
};