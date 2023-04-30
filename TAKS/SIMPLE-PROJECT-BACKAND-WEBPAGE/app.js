// Import the required modules
const express = require('express');
const path = require('path');
const controllers = require('./controllers/controller');

// Create an instance of the Express application
const app = express();

// Configure the server to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the routes using the controllers
app.get('/', controllers.home);
app.get('/netflix', controllers.netflix);

// Start the server and listen for incoming requests
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
