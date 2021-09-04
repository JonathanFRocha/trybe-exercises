const errorMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json(err.error);
  }
};

module.exports = errorMiddleware;
