'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    
    static associate(models) {
     
    }
  }
  item.init({
    itemNome: DataTypes.STRING(255),
    itemDescricao: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};