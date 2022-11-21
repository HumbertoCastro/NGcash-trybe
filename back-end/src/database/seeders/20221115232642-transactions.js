// src/seeders/[timestamp]-transactions.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('transactions',
      [
        {
          value: '1223',
          debited_account_id: 3,
          credited_account_id: 1,
        },
        {
          value: '123',
          debited_account_id: 2,
          credited_account_id: 1,
        },
        {
          value: '1423',
          debited_account_id: 3,
          credited_account_id: 1,
        },
        {
          value: '23',
          debited_account_id: 4,
          credited_account_id: 2,
        },
        {
          value: '123',
          debited_account_id: 4,
          credited_account_id: 3,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('transactions', null, {});
  },
};