const express = require('express');
const router = express.Router();
const pool = require('../config/dbconnection'); // Assuming the database connection is in the "config" folder

const {
  createFood,
  getAllFood,
  getFoodById,
  updateFood,
  deleteFood
} = require('../controllers/foodController'); // Assuming the controller functions are in the "controllers" folder
// Create a new food item
router.post('/food', createFood);

// Get all food items
router.get('/food', getAllFood);

// Get a specific food item by ID
router.get('/food/:id', getFoodById);

// Update a food item
router.put('/food/:id', updateFood);

// Delete a food item
router.delete('/food/:id', deleteFood);

// Export the router
module.exports = router;