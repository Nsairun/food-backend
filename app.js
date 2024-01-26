// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const foodController = require('./controller/foodcontroller');

// Create Express app
const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Define API endpoints
app.post('/food', foodController.createFood);
app.get('/food', foodController.getAllFood);
app.get('/food/:id', foodController.getFoodById);
app.put('/food/:id', foodController.updateFood);
app.delete('/food/:id', foodController.deleteFood);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});