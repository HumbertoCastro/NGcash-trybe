const Joi = require('joi');
const badRequest = require('../errors/badRequest');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
});

const userDataVerify = (req, res, next) => {
  try {
    const { name, password } = req.body;
    const { error } = userSchema.validate({ name, password });
    if (error) throw badRequest(error.message);

  next();
  } catch (error) {
    next(error);
  }
};

module.exports = userDataVerify; 