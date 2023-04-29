const path = require('path');

function home(req, res) {
  res.sendFile(path.join(__dirname, '../views/home.html'));
}

module.exports = {
  home,
};
