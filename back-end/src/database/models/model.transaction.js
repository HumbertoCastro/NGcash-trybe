// src/models/address.model.js

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    creditedAccountId: { type: DataTypes.INTEGER, foreignKey: true },
    debitedAccountId: { type: DataTypes.INTEGER, foreignKey: true },
    value: DataTypes.DECIMAL,
    createdAt: DataTypes.DATEONLY,
  },
  {
    timestamps: false,
    tableName: 'transactions',
    underscored: true,
  });

  Transaction.associate = (models) => {
    Transaction.hasMany(models.Account,
      { foreignKey: 'accountId', as: 'accounts' });
  };

  return Transaction;
};