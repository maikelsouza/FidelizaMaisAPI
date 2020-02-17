'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,    
    sexo: {
      type: DataTypes.ENUM,
      values: ['Masculino','Feminino']
    }, 
    email: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    grupoUsuarioId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }   
},  
  {});
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.GrupoUsuario, {foreignkey : 'grupoUsuarioId'});
    Usuario.CartaoFidelidade =  Usuario.hasMany(models.CartaoFidelidade, { foreignkey : 'usuarioId'});
    Usuario.ProgramaFidelidade =  Usuario.hasMany(models.ProgramaFidelidade, { foreignkey : 'usuarioId'});
    Usuario.Estabelecimento = Usuario.hasMany(models.Estabelecimento, {foreignkey : 'usuarioId'});    
  };
  return Usuario;
};