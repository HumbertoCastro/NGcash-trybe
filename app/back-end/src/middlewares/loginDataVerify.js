const Joi = require('joi');
const badRequest = require('../errors/badRequest');

const userSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
});

const loginMiddleware = (req, _res, next) => {
  try {
    const { name, password } = req.body;
    const { error } = userSchema.validate({ name, password });
    if (error) throw badRequest(error.message);

  next();
  } catch (error) {
    next(error);
  }
};

module.exports = loginMiddleware; 