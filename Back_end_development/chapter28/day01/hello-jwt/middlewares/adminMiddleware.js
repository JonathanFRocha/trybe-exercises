const validateAdmin = (req, _res, next) => {
  const { admin } = req.user;
  if (!admin) {
    const err = new Error({
      error: {
        message: "Restricted access",
      },
    });
    err.statusCode = 403;
    return next(err);
  }

  return next();
};

module.exports = validateAdmin;
