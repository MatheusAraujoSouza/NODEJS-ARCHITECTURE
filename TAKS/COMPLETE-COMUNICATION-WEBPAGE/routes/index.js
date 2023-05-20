const express = require('express');
const router = express.Router();

// Route handler for the home page
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/pages/home.html');
});

// Route handler for the about page
router.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/pages/about.html');
});

// Route handler for the contact page
router.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/pages/contact.html');
});

router.get('/support', (req, res) => {
    res.sendFile(__dirname + '/views/pages/support.html');
  });


router.get('/table', (req, res) => {
  res.sendFile(__dirname + '/views/pages/table.html');
});


router.get('/api/data', (req, res) => {
  // Fetch data from your API or database
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more data as needed
  ];

  res.json(data);
});


module.exports = router;