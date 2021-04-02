'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: 'userId', 
        as: 'orders'
      })
    }
  };
  Users.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};