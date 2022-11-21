const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const { name, password } = req.body;

    const userLoged = await loginService.login({ name, password });

    return res.status(200).json(userLoged);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
