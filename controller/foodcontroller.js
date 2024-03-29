// Import the database connection pool
const pool = require('../db/fooddb');

// Create a new food item
const createFood = (req, res) => {
  const { name, description, image_url } = req.body;
  pool.query('INSERT INTO food (name, description, image_url) VALUES (?, ?, ?)', [name, description, image_url], (error, results) => {
    if (error) throw error;
    res.send('Food item created');
  });
};

// Get all food items
const getAllFood = (req, res) => {
  pool.query('SELECT * FROM food', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

// Get a specific food item by ID
const getFoodById = (req, res) => {
  const foodId = req.params.id;
  pool.query('SELECT * FROM food WHERE id = ?', [foodId], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
};

// Update a food item
const updateFood = (req, res) => {
  const foodId = req.params.id;
  const { name, description, image_url } = req.body;
  pool.query('UPDATE food SET name = ?, description = ?, image_url = ? WHERE id = ?', [name, description, image_url, foodId], (error, results) => {
    if (error) throw error;
    res.send('Food item updated');
  });
};

// Delete a food item
const deleteFood = (req, res) => {
  const foodId = req.params.id;
  pool.query('DELETE FROM food WHERE id = ?', [foodId], (error, results) => {
    if (error) throw error;
    res.send('Food item deleted');
  });
};

// Export the controller functions
module.exports = {
  createFood,
  getAllFood,
  getFoodById,
  updateFood,
  deleteFood
};