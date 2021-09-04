const { checkCep, validateBodyCep } = require("../middlewares/cepMiddleware");
const Cep = require("../services/cep");

checkCep;
const cep = (app) => {
  app.get("/cep/:cep", checkCep, async (req, res) => {
    const { cep } = req.params;
    const cepS = new Cep();
    const { msg, code } = await cepS.FindOne(cep);

    res.status(code).json(msg);
  });

  app.post("/cep", validateBodyCep, async (req, res) => {
    const body = req.body;
    const cepS = new Cep();
    const { msg, code } = await cepS.InsertOne(body);
    res.status(code).send(msg);
  });
};

module.exports = cep;
