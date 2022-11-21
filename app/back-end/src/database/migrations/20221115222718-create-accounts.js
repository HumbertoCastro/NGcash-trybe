// src/migrations/[timestamp]-create-employee.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      balance: {
        allowNull: false,
        type: Sequelize.DECIMAL,
        field: 'balance',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('accounts');
  },
};