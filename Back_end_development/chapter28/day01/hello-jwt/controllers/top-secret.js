const express = require("express");
const { validateAuthorization, validateAdmin } = require("../middlewares");
const route = express.Router();

route.get("/", validateAuthorization, validateAdmin, (_req, res) => {
  res.status(200).json({ secretInfo: "Peter Parker é o Homem-Arannha" });
});

module.exports = route;
