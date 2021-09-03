const express = require("express");
const btcRouter = express.Router();
const { checkToken } = require("./middlewares/userValidity");
const fetch = require("node-fetch");

btcRouter.get("/", (req, res) => {
  res.send("btc Router");
});

btcRouter.post("/price", checkToken, async (req, res) => {
  const result = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");

  res.send(await result.json());
});

module.exports = btcRouter;
