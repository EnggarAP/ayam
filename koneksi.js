var mysql = require('mysql');

//database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sipekatdb"
})

con.connect((err) => {
  if (err) throw err;
  console.log('Database terkoneksi');
});

module.exports = con;