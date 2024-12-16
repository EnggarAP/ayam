const mysql = require('mysql2');
require('dotenv').config();

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME, // Ensure this is set correctly
});

con.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
    return;
  }
  console.log('Database terkoneksi');

  // Test query
  con.query('SHOW TABLES', (error, results) => {
    if (error) {
      console.error('Query error:', error);
    } else {
      console.log('Tables:', results);
    }
    con.end();
  });
});
