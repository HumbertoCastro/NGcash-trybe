const userService = require('../services/usersService');

const create = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    console.log(name, password);
    const newUser = await userService.create({ name, password });

    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };