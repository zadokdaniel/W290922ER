const pool = require("mysql2/promise").createPool({
  host: "localhost",
  database: "daniel",
  user: "root",
  password: "password",
});

module.exports = pool;
