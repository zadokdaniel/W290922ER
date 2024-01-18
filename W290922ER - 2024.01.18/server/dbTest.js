const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  database: "daniel",
  user: "root",
  password: "password",
});

connection.query("SELECT * FROM messages", (err, result) => {
  console.log(err, result);
});

connection.query(
  `
    INSERT INTO messages (\`to\`, \`title\`)
    VALUES 
      (?, ?)
  `,
  ["daniel", 'says " hi'],
  (err, result) => {
    console.log(err, result);
  }
);
