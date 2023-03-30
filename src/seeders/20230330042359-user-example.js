'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'khaivv',
        email: 'khaivv@gmail.com',
        password: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'khaivv1',
        email: 'khaivv1@gmail.com',
        password: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'khaivv2',
        email: 'khaivv2@gmail.com',
        password: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
