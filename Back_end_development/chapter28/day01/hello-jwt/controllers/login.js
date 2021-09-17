const express = require("express");
const { validateAuthentication } = require("../middlewares");

const route = express.Router();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_PASSWORD || "createAPassword";

route.post("/", validateAuthentication, (req, res, next) => {
  const { username, password } = req.body;

  if (username === "admin" && password !== "s3nh4S3gur4???") {
    next(new Error("invalid username or password"));
  }

  const admin = username === "admin" && password === "s3nh4S3gur4???";
  const payload = {
    username,
    admin,
  };

  const config = {
    expiresIn: "1h",
  };

  const token = jwt.sign(payload, secret, config);

  res.status(200).json({ token });
});

module.exports = route;
