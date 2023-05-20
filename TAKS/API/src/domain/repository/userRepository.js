const userService = require('../services/userService');

// GET /users
const getUsers = (req, res) => {
  const users = userService.getUsers();
  res.json(users);
};

// GET /users/:id
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userService.getUserById(id);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// POST /users
const createUser = (req, res) => {
  const { name, email } = req.body;
  const user = userService.createUser(name, email);
  
  res.status(201).json(user);
};

// PUT /users/:id
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = userService.updateUser(id, name, email);
  
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

// DELETE /users/:id
const deleteUser = (req, res) => {
  const { id } = req.params;
  const deletedUser = userService.deleteUser(id);
  
  if (deletedUser) {
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};