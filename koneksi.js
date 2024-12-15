const mysql = require('mysql2');
require('dotenv').config();

//database
const con = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
})

con.connect((err) => {
  if (err) throw err;
  console.log('Database terkoneksi');
});

module.exports = con;