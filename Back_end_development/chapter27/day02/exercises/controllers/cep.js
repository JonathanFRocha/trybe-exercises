const { checkCep } = require("../middlewares/cepMiddleware");
const Cep = require("../services/cep");

checkCep;
const cep = (app) => {
  app.get("/cep/:cep", checkCep, async (req, res) => {
    const { cep } = req.params;
    const cepS = new Cep();
    const { msg, code } = await cepS.FindOne(cep);

    res.status(code).json(msg);
  });

  app.post("/cep", async (req, res) => {
    const body = req.body;
    const cepS = new Cep();
    const { msg, code } = await cepS.insertOne(body);
    res.status(200).send("ok");
  });
};

module.exports = cep;
