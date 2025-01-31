'use strict';

var userId = '8fa1b90c-80b6-11e9-bc42-526af7764f64';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      {
        userId: userId,
        createdAt: '2019-06-06',
        updatedAt: '2019-06-06'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', {userId : userId});
  }
};
