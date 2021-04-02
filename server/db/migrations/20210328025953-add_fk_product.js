'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ProductsOrders', {
      fields: ['productId'],
      type: 'foreign key',
      references: {
        table: 'Products',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ProductsOrders', {
      fields: ['productId'],
      type: 'foreign key',
      references: {
        table: 'Products',
        field: 'id'
      }
    })
  }
};
