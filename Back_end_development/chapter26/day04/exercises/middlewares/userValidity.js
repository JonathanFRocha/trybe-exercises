const checkUsername = (req, res, next) => {
  const { username } = req.body;
  if (username.length <= 3) res.status(400).json(errorMessage);
  next();
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) res.status(400).json(errorMessage);
  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  const hasText = !/\d/.test(password);
  if (password.length < 4 || password.length > 8 || hasText) {
    res.status(400).json(errorMessage);
  }
  next();
};

const checkToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization.length !== 12) res.status(401).json({ message: "invalid token" });
  next();
};

module.exports = {
  checkUsername,
  checkEmail,
  checkPassword,
  checkToken,
};
