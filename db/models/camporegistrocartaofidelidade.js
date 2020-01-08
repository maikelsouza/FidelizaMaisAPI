'use strict';
module.exports = (sequelize, DataTypes) => {
  const CampoRegistroCartaoFidelidade = sequelize.define('CampoRegistroCartaoFidelidade', {
    marcado:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },      
    data: {
      type: DataTypes.DATE,
      allowNull: false      
    }, 
    cartaoFidelidadeId: {
      type: DataTypes.INTEGER
      
    },   
  }, {});
  CampoRegistroCartaoFidelidade.associate = function(models) {
    CampoRegistroCartaoFidelidade.belongsTo(models.CartaoFidelidade, {foreignkey : 'cartaoFidelidadeId'});
    
  };
  return CampoRegistroCartaoFidelidade;
};