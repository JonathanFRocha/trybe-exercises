const express = require("express");
const bookRouter = require("./controllers/bookController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/book", bookRouter);

const PORT = "3000";

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
