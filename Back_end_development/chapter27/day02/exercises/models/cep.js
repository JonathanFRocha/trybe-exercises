const connection = require("../infraestructure/database/connection");

class Cep {
  constructor() {
    this.db = connection;
    this.Dbceps = "ceps";
  }

  dummyfication(sqlElement) {
    return sqlElement.map(({ cep, logradouro, bairro, localidade, uf }) => ({
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    }));
  }

  async FindOne(cep) {
    const [address] = await this.db.execute(`SELECT * FROM ${this.Dbceps} WHERE cep = ? `, [cep]);
    return this.dummyfication(address)[0];
  }
}

module.exports = Cep;
