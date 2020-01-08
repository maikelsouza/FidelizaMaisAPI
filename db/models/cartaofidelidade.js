'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartaoFidelidade = sequelize.define('CartaoFidelidade', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quantidadeMarcacao: DataTypes.NUMBER,
    premio: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    dataExpiracao: DataTypes.DATE,
    usuarioId: {
      type: DataTypes.INTEGER      
    },   
    estabelecimentoId: {
      type: DataTypes.INTEGER,
      allowNull: false      
    }   
  }, {});
  CartaoFidelidade.associate = function(models) {
    CartaoFidelidade.Estabelecimento = CartaoFidelidade.belongsTo(models.Estabelecimento, {foreignkey : 'estabelecimentoId'});
    CartaoFidelidade.Usuario = CartaoFidelidade.belongsTo(models.Usuario, {foreignkey : 'usuarioId'});
    CartaoFidelidade.CampoRegistroCartaoFidelidade =  CartaoFidelidade.hasMany(models.CampoRegistroCartaoFidelidade, { foreignkey : 'cartaoFidelidadeId'});                              
  };
  return CartaoFidelidade;
};