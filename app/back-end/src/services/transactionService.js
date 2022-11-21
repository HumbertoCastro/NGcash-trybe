const { Op } = require('sequelize');
const { Transaction, User, Account } = require('../database/models');
const conflict = require('../errors/conflicts');
const notFound = require('../errors/notFound');

const getAll = async (id) => {
  const newTrans = await Transaction
    .findAll({ where: { [Op.or]: [{ creditedAccountId: id }, { debitedAccountId: id }] } }); 
  return newTrans;
};

const create = async (name, id, value) => {
  console.log(name, id, value);
  const otherUserId = await User.findOne({ where: { username: name } });
  const MyAccount = await Account.findByPk(+id, { attributes: ['id', 'balance'] });

  if (!otherUserId) throw notFound('The destiny account doesnt exist');
  if (parseInt(MyAccount.balance, 10) 
    < parseInt(value, 10)) throw conflict('money');

  await Account
  .update({ balance: parseInt(MyAccount.balance, 10) - parseInt(value, 10) }, { where: { id } });

  const newTrans = await Transaction.create({ 
    debitedAccountId: id,
    creditedAccountId: otherUserId.id,
    value,
  });
  return newTrans;
};

module.exports = { getAll, create };