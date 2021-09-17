const ping = require("./ping");
const login = require("./login");
const user = require("./users");
const secretRoute = require('./top-secret')
module.exports = {
  ping,
  user,
  login,
  secretRoute
};
