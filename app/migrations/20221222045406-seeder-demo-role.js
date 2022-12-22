'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.bulkInsert('Roles', [
      {
        name: 'Admin',
        slug: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User',
        slug: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Moderator',
        slug: 'moderator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.bulkDelete('Roles', null, {});
  }
};
