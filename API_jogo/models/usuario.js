'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
   
    static associate(models) {
    }
  }
  usuario.init({
    usuarioNome: DataTypes.STRING(255),
    usuarioClasse: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};