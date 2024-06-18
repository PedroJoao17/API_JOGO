'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('items', 'itemID');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('items', 'itemID', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
