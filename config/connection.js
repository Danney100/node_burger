const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "WqSpUCCQ2M",
    database: "sql3342488",
  });
}

connection.connect((err) => {
  if (err) console.log(err);
});

module.exports = connection;
