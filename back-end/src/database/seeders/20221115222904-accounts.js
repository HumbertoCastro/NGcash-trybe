// src/seeders/[timestamp]-accounts.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('accounts',
      [
        {
          balance: '2341',
        },
        {
          balance: '2341',
        },
        {
          balance: '2341',
        },
        {
          balance: '2341',
        },
        {
          balance: '2341',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('accounts', null, {});
  },
};