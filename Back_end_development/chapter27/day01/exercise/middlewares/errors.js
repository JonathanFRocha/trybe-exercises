const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  if (err.status) {
    return res.status(err.status).json({ error: true, message: err.message });
  }
};

module.exports = { errorMiddleware };
