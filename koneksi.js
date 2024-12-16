const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
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

module.exports = connection;