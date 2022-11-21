const userVerify = require('./validates/userVerify');
const { User, Account: AccountData } = require('../database/models');
const conflict = require('../errors/conflicts');
const notFound = require('../errors/notFound');
const passwordEncryptor = require('../helpers/passwordEncryptor');

const create = async ({ name, password }) => {
  const encryptedPassword = passwordEncryptor(password);

  const isUserRegistered = await userVerify(name, encryptedPassword);

  if (isUserRegistered) throw conflict('User already registered');

  const accountCreated = await AccountData.create({ balance: 100 });
  const createdUser = await User.create({
    username: name, password: encryptedPassword, accountId: accountCreated.id });  
  const newUser = {
    id: createdUser.id, name: createdUser.username };
  return newUser;
};

const getUserById = async (id) => {
  console.log(id);
  const getUser = await User.findByPk(id, { attributes: { exclude: 'password' } });
  if (!getUser) throw notFound('User does not exist');
  return getUser; 
};

module.exports = {
  create,
  getUserById,
};