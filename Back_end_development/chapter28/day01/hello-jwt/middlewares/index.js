const validateAuthentication = require("./authenticateMiddleware");
const validateAuthorization = require("./authorizationMiddleware");
const error = require("./error");

module.exports = {
  error,
  validateAuthentication,
  validateAuthorization,
};
