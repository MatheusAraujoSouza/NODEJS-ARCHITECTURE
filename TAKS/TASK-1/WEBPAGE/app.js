// Import the required modules
const express = require('express');
const app = express();
const routes = require('./routes');


app.use(routes);
app.use('/css', express.static(__dirname + '/routes/views/pages/css'));
app.use('/js', express.static(__dirname + '/routes/views/pages/js'));

// Start the server and listen for incoming requests
app.listen(3002, () => {
  console.log('Server started on port 3002');
});