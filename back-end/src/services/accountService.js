const { Account } = require('../database/models');

const getById = async (id) => {
  const productById = await Account.findByPk(+id, { attributes: ['id', 'balance'] });

  return !productById ? null : productById;
};

module.exports = { getById };