const Joi = require("joi");

const validateAuthentication = (req, _res, next) => {
  const body = req.body;

  const { error } = Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

  if (error) {
    return next(error);
  }
  return next();
};

module.exports = validateAuthentication;
