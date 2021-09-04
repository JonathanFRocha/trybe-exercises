const { validateCep, validateCepPost } = require("../schema/cepValidations");

const checkCep = (req, _res, next) => {
  const { cep } = req.params;
  const result = validateCep(cep);
  if (result.error) return next(result);
  next();
};

const validateBodyCep = (req, _res, next) => {
  const body = req.body;
  const result = validateCepPost(body);
  if (result.error) return next(result);
  next();
};

module.exports = { checkCep, validateBodyCep };
