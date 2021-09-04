const { validatePassword, validateUser } = require("../middlewares");
const User = require("../model/user");

const userController = (app) => {
  app.get("/user", async (_req, res) => {
    const user = new User();
    const allUsers = await user.GetAll();
    res.status(200).send(allUsers);
  });

  app.post("/user", validateUser, validatePassword, async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = new User();
    const insertedUser = await user.Insert({ firstName, lastName, email, password });
    res.status(201).json(insertedUser);
  });
};

module.exports = userController;
