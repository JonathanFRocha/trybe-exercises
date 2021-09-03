const express = require("express");
const userRouter = require("./user");
const btcRouter = require("./btc");
const cors = require("cors");
const postRouter = require("./posts");
const errors = require("./middlewares/routerNotFound");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/btc", btcRouter);
app.use("/posts", postRouter);
app.use("*", (_req, _res, next) => next({ statusCode: 404, message: "Opsss router not found" }));
app.use(errors.routerNotFound);
app.listen(3001, () => {
  console.log("express listening on 3001");
});
