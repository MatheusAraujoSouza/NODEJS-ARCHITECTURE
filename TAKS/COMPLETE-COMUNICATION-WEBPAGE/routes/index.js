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

module.exports = router;