const joi = require("joi");
const isNotValid = (value, regex) => {
  const re = regex;
  return !re.test(value);
};

const isLesserThan = (value, min) => {
  return value.length < min;
};

const validateCep = (cep) => {
  const errorRes = { error: { code: "invalidData", message: "CEP inválido" }, status: 400 };
  switch (true) {
    case isNotValid(cep, /\d{5}-?\d{3}/):
      return errorRes;
    case isLesserThan(cep, 8):
      return errorRes;
    default:
      return {};
  }
};
// { "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
const hasEmptyValue = (body) => {
  const { error } = joi
    .object({
      cep: joi.string().not().empty().required(),
      logradouro: joi.string().not().empty().required(),
      bairro: joi.string().not().empty().required(),
      localidade: joi.string().not().empty().required(),
      uf: joi.string().not().empty().required(),
    })
    .validate(body);
  if (error)
    return { error: { code: "invalidData", message: error.details[0].message }, status: 404 };
  return null;
};

const validateCepPost = (body) => {
  const hasEmptyValueError = hasEmptyValue(body);
  if (hasEmptyValueError) return hasEmptyValueError;
  const isNotValidCheck = isNotValid(body.cep, /\d{5}-\d{3}/);
  if (isNotValidCheck)
    return { error: { code: "invalidData", message: "CEP inválido" }, status: 400 };
  return {};
};

module.exports = { validateCep, validateCepPost };
