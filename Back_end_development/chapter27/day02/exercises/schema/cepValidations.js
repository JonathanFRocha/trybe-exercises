const isNotValid = (value) => {
  const re = /\d{5}-?\d{3}/;
  return !re.test(value);
};

const isLesserThan = (value, min) => {
  return value.length < min;
};

const validateCep = (cep) => {
  const errorRes = { error: { code: "invalidData", message: "CEP inválido" }, status: 400 };
  switch (true) {
    case isNotValid(cep):
      return errorRes;
    case isLesserThan(cep, 8):
      return errorRes;
    default:
      return {};
  }
};

const validateCepPost = (body) => {
  return true;
};

module.exports = { validateCep, validateCepPost };
