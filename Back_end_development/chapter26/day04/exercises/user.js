const express = require("express");
const userRouter = express.Router();

const errorMessage = { message: "invalid data" };
const { checkUsername, checkPassword, checkEmail } = require("./middlewares/userValidity");
userRouter.get("/", (req, res) => {
  res.send("User Route");
});

userRouter.post("/register", checkUsername, checkEmail, checkPassword, (req, res) => {
  res.status(200).json({ message: "user created" });
});

userRouter.post("/login", checkEmail, checkPassword, (_req, res) =>
  res.status(200).json({ token: "86567349784e" })
);

module.exports = userRouter;
