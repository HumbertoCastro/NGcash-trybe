// src/seeders/[timestamp]-users.js

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {
          password: '92275c55a2cc8f8af1547044fd8c60dd',
          username: 'Paulo',
          account_id: 1,
        },
        {
          password: '92275c55a2cc8f8af1547044fd8c60dd',
          username: 'Silva',
          account_id: 2,
        },
        {
          password: '92275c55a2cc8f8af1547044fd8c60dd',
          username: 'Roberto',
          account_id: 3,
        },
        {
          password: '92275c55a2cc8f8af1547044fd8c60dd',
          username: 'Claudio',
          account_id: 4,
        },
        {
          password: '92275c55a2cc8f8af1547044fd8c60dd',
          username: 'Fantastico',
          account_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};