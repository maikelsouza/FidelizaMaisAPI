'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estabelecimento = sequelize.define('Estabelecimento', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkLogo: DataTypes.STRING,
    cnpj: DataTypes.STRING,   
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },  
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    tipoEstabelecimentoId: {
      type: DataTypes.STRING, 
      allowNull: false
    }    
  },{    
  });
  Estabelecimento.associate = function(models) {  
    Estabelecimento.belongsTo(models.TipoEstabelecimento, {foreignkey : 'estabelecimentoId'});
   Estabelecimento.EnderecoEstabelecimento = Estabelecimento.hasOne(models.EnderecoEstabelecimento, { foreignkey : 'estabelecimentoId'});                                        
   Estabelecimento.CartaoFidelidade =  Estabelecimento.hasMany(models.CartaoFidelidade, { foreignkey : 'estabelecimentoId'});
   Estabelecimento.ProgramaFidelidade =  Estabelecimento.hasMany(models.ProgramaFidelidade, { foreignkey : 'estabelecimentoId'});
   Estabelecimento.Telefone =  Estabelecimento.hasMany(models.Telefone, { foreignkey : 'estabelecimentoId'});
   Estabelecimento.hasMany(models.MidiaSocial, {foreignkey : 'estabelecimentoId'});
  };
  return Estabelecimento;
};