'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn('Todos',
      'UserId', { type: Sequelize.INTEGER });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn('Todos', 'UserId', { /* query options */ });
  }
};
