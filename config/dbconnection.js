// config/database.js

const mysql = require('mysql2');

// Create the database connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Nsairun24',
  database: 'your_database_nameoffood',
  connectionLimit: 10, // Adjust the connection limit as per your needs
});

// Export a function to get a database connection from the pool
exports.getConnection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
      } else {
        resolve(connection);
      }
    });
  });
};

module.exports = pool;
