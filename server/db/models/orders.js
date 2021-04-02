'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'user' 
      });
      Orders.belongsToMany(models.Products, {
        foreignKey: 'productId', 
        through:  'productsorders',
        as: 'productsOrders'
      })

    }
  };
  Orders.init({
    userId: DataTypes.INTEGER,
    clientName: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};