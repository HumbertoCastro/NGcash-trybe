const { User } = require('../../database/models');

const userVerify = async (name, password) => {
  const checkUser = await User.findOne({ where: { username: name, password } });
  if (checkUser) return true;
  return false;
};

module.exports = userVerify;