'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'usuarioID');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('NomeDaTabela', 'NomeDaColuna', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
