'use strict';
module.exports = (sequelize, DataTypes) => {
  const CampoItemProgramaFidelidade = sequelize.define('CampoItemProgramaFidelidade', {
    nome:{
      type: DataTypes.STRING,
      allowNull: false
    },        
    descricao: DataTypes.STRING,
    quantidadePontos: {
      type: DataTypes.NUMBER,
      allowNull: false
    }, 
    ativo:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }, 
    dataExpiracao: DataTypes.DATE,
    programaFidelidadeId: {
      type: DataTypes.INTEGER, 
      allowNull: false
  }   
  
    
  }, {});
  CampoItemProgramaFidelidade.associate = function(models) {
    this.belongsTo(models.ProgramaFidelidade, { foreignKey: 'programaFidelidadeId', as: 'programaFidelidade' });
  };
  return CampoItemProgramaFidelidade;
};