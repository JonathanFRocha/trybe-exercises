const ping = (app) => {
  app.get("/ping", (_req, res) => {
    res.status(200).send({ message: "pong!" });
  });
};

module.exports = ping;
