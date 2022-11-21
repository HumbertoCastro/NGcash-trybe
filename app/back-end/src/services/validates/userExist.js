const { user: User } = require('../../database/models');

const userExist = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (user) return true;
  return false;
};

module.exports = userExist;