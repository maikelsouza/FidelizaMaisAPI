'use strict';
module.exports = (sequelize, DataTypes) => {
  const GrupoUsuario = sequelize.define('GrupoUsuario', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {});
  GrupoUsuario.associate = function(models) {
    GrupoUsuario.hasMany(models.Usuario, {foreignkey : 'grupoUsuarioId', as: 'usuario'});    
    GrupoUsuario.Permissoes = GrupoUsuario.hasMany(models.Permissoes, { foreignkey : 'grupoUsuarioId' });
  };
  return GrupoUsuario;
};