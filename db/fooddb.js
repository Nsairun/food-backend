// Import the database connection pool
const pool = require('../config/dbconnection');

// Create the food table
pool.query(`
  CREATE TABLE IF NOT EXISTS food (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
  )
`, (error, results) => {
  if (error) throw error;
  console.log('Food table created');
});