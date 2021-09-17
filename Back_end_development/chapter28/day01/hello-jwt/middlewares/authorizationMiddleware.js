const jwt = require("jsonwebtoken");

const secret = process.env.JWT_PASSWORD || "createAPassword";

const validateAuthorization = (req, _res, next) => {
  const { token } = req.headers;

  if (!token) {
    const err = new Error("Token not found");
    err.statusCode = 401;
    return next(err);
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};

module.exports = validateAuthorization;
