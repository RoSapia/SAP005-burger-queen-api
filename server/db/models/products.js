'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsToMany(models.Orders, {
        foreignKey: 'productId', 
        through: 'productsOrders',
        as: 'orders'
      })
    }
  };
  Products.init({
    productsName: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};