const Cep = require("../models/cep");

const errors = {
  CEP_NOT_FOUND: { error: { code: "notFound", message: "CEP não encontrado" } },
  CEP_CONFLICT: {
    error: { code: "alreadyExists", message: "CEP já existente" },
  },
};
const codes = {
  OK: "200",
  CREATED: "201",
  NOT_FOUND: "404",
  CONFLICT: "409",
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

  async InsertOne(address) {
    const { cep: untreatedCep, logradouro, bairro, localidade, uf } = address;

    const cep = untreatedCep.replace("-", "");
    const foundCep = await this.cep.FindOne(cep);

    console.log(cep);
    console.log(foundCep);
    if (foundCep !== undefined && foundCep.cep)
      return { msg: errors.CEP_CONFLICT, code: codes.CONFLICT };

    await this.cep.InsertOne({ cep, logradouro, bairro, localidade, uf });

    const insertedCep = await this.cep.FindOne(cep);

    return { msg: insertedCep, code: codes.CREATED };
  }
}

module.exports = CepService;
