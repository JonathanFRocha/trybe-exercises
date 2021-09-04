const Cep = require("../models/cep");

const errors = {
  CEP_NOT_FOUND: { error: { code: "notFound", message: "CEP não encontrado" } },
};

const codes = {
  OK: "200",
  NOT_FOUND: "404",
};

class CepService {
  constructor() {
    this.cep = new Cep();
  }

  async FindOne(cep) {
    const treatedCep = cep.replace("-", "");
    const foundCep = await this.cep.FindOne(treatedCep);
    if (!foundCep) return { msg: errors.CEP_NOT_FOUND, code: codes.NOT_FOUND };
    return { msg: foundCep, code: "200" };
  }
}

module.exports = CepService;
