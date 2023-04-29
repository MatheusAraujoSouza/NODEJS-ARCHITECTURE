const path = require('path');

function home(req, res) {
  res.sendFile(path.join(__dirname, '../views/home.html'));
}

function netflix(req, res) {
  res.sendFile(path.join(__dirname, '../views/netflix.html'));
}

module.exports = {
  home,
  netflix,
};






