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
    site: {
      type: DataTypes.STRING,
      unique: true
    },
    tipoEstabelecimentoId: {
      type: DataTypes.STRING, 
      allowNull: false
    },    
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }    
  },{    
  });
  Estabelecimento.associate = function(models) {  
   Estabelecimento.belongsTo(models.TipoEstabelecimento, {foreignkey : 'estabelecimentoId'});
   Estabelecimento.belongsTo(models.Usuario, {foreignkey : 'estabelecimentoId'});   
   this.belongsToMany(models.Usuario, { foreignKey: 'estabelecimentoId', through: 'ClienteEstabelecimentos', as: 'usuarios' });
   Estabelecimento.EnderecoEstabelecimento = Estabelecimento.hasOne(models.EnderecoEstabelecimento, { foreignkey : 'estabelecimentoId'});                                        
   Estabelecimento.CartaoFidelidade =  Estabelecimento.hasMany(models.CartaoFidelidade, { foreignkey : 'estabelecimentoId', as: 'cartaoFidelidadeAlias'});
   Estabelecimento.ProgramaFidelidade =  Estabelecimento.hasMany(models.ProgramaFidelidade, { foreignkey : 'estabelecimentoId', as: 'programaFidelidadeAlias'});
   Estabelecimento.Telefone =  Estabelecimento.hasMany(models.Telefone, { foreignkey : 'estabelecimentoId'});
   Estabelecimento.hasMany(models.MidiaSocial, {foreignkey : 'estabelecimentoId'});
  };
  return Estabelecimento;
};