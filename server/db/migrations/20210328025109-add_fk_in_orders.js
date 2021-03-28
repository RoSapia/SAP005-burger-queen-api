'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ProductsOrders', {
      fields: ['orderId'],
      type: 'foreign key',
      references: {
        table: 'Orders',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ProductsOrders', {
      fields: ['orderId'],
      type: 'foreign key',
      references: {
        table: 'Orders',
        field: 'id'
      }
    })
  }
};
