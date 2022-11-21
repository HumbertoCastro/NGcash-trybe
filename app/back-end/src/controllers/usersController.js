const userService = require('../services/usersService');

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserById,
}; 