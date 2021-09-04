const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "cep_lookup",
};

const connection = mysql.createPool(config);

module.exports = connection;
