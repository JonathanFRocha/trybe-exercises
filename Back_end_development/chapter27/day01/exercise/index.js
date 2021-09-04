const customExpress = require("./config/customExpress");
const app = customExpress();

const PORT = "3000";

app.listen(PORT, () => {
  console.log("listening to port " + PORT);
});
