require("dotenv").config();
const express = require("./config/customExpress");

const PORT = 3000;

const app = express();
app.listen(process.env.PORT || PORT, () => {
  console.log("app runing on " + process.env.PORT || PORT);
});
