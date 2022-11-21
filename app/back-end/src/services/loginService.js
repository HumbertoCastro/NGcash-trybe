const { User } = require('../database/models');
const createToken = require('../helpers/createToken');
const notFound = require('../errors/notFound');
const passwordEncryptor = require('../helpers/passwordEncryptor');

const login = async ({ name, password }) => {
  const encryptedPassword = passwordEncryptor(password);
  const getUser = await User.findOne({ where: { username: name, password: encryptedPassword } });

  if (!getUser) throw notFound('Not found');

  const userToken = createToken({ id: getUser.id });
  const userLoged = {
    name: getUser.username,
    id: getUser.id,
    accountId: getUser.accountId,
    token: userToken,
  };
  
  return userLoged;
};

module.exports = { login };