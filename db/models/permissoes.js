'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permissoes = sequelize.define('Permissoes', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    grupoUsuarioId: {
      type: DataTypes.INTEGER, 
      allowNull: false
  }   
  }, {});
  Permissoes.associate = function(models) {
    Permissoes.belongsTo(models.GrupoUsuario, {foreignkey : 'grupoUsuarioId'});    
  };
  return Permissoes;
};