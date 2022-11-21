module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    balance: DataTypes.DECIMAL,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'accounts',
    underscored: true,
  });

  return Account;
};