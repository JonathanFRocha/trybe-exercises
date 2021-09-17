const express = require("express");
const { validateAuthorization } = require("../middlewares");
const userRoute = express.Router();

userRoute.get("/me", validateAuthorization, (req, res) => {
  const { username, admin } = req.user;
  console.log("route");
  res.status(200).json({ username, admin });
});

module.exports = userRoute;
