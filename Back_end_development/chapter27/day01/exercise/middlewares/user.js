const errorBuilder = require("../services/errorBuilder");

const validateUser = (req, _res, next) => {
  const { firstName, lastName, email, password } = req.body;
  console.log("userV");
  if (!firstName) return next(errorBuilder(400, "O campo 'firstName' é obrigatório!"));
  if (!lastName) return next(errorBuilder(400, "O campo 'lastName' é obrigatório!"));
  if (!email) return next(errorBuilder(400, "O campo 'email' é obrigatório!"));
  if (!password) return next(errorBuilder(400, "O campo 'password' é obrigatório!"));

  next();
};

const validatePassword = (req, _res, next) => {
  console.log("passV");
  const { password } = req.body;
  if (password.length <= 6)
    return next(errorBuilder(400, "O campo 'password' deve ter pelo menos 6 caracteres"));

  next();
};

module.exports = {
  validateUser,
  validatePassword,
};
