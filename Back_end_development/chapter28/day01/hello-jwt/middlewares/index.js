const validateAuthentication = require("./authenticateMiddleware");
const validateAuthorization = require("./authorizationMiddleware");
const validateAdmin = require("./adminMiddleware");

const error = require("./error");

module.exports = {
  error,
  validateAuthentication,
  validateAuthorization,
  validateAdmin,
};
