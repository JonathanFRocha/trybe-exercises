const connection = require("../infraestructure/database/connection");

// "firstName": "Calebe",
// "lastName": "Junior",
// "email": "calebe.junior@gmail.com",
// "password": "d496d5ea2442"

class User {
  constructor() {
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.db = connection;
    this.collection = "user";
  }

  async GetAll() {
    const db = await this.db();
    const res = await db.collection(this.collection).find().toArray();
    return res;
  }

  async Insert(user) {
    const { firstName, lastName, email, password } = user;
    const db = await this.db();
    const res = await db
      .collection(this.collection)
      .insertOne({ firstName, lastName, email, password });
    const id = res.insertedId.toString();
    return {
      id,
      firstName,
      lastName,
      email,
    };
  }
}

module.exports = User;
