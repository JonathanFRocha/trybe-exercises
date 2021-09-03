const express = require("express");
const consign = require("consign");
const { errorMiddleware } = require("../middlewares");

const configuredExpress = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  consign().include("controllers").into(app);

  app.use(errorMiddleware);
  return app;
};

module.exports = configuredExpress;
