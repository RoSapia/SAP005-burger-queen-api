'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn(
      'Orders',
      'processedAt',
      {
        type: Sequelize.DATE,
        allowNull: true
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'processedAt')
  }
}