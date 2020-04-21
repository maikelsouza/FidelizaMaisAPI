'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProgramaFidelidade = sequelize.define('ProgramaFidelidade', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataExpiracao: DataTypes.DATE,
    ativo: DataTypes.BOOLEAN,
    regra: DataTypes.NUMBER,
    usuarioId: DataTypes.NUMBER,
    estabelecimentoId: {
      type: DataTypes.INTEGER,
      allowNull: false      
    }   
    
  }, {});
  ProgramaFidelidade.associate = function(models) {
    ProgramaFidelidade.Estabelecimento = ProgramaFidelidade.belongsTo(models.Estabelecimento, {foreignkey : 'estabelecimentoId'});
    ProgramaFidelidade.Usuario = ProgramaFidelidade.belongsTo(models.Usuario, {foreignkey : 'usuarioId'});
    this.hasMany(models.CampoItemProgramaFidelidade, { foreignkey : 'programaFidelidadeId', as: 'CampoItemProgramaFidelidades' });                              
  };
  return ProgramaFidelidade;
};