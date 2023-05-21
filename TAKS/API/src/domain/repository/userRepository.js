// src/infra/repositories/userRepository.js

const User = require('../../domain/models/User');
const db = require('../../infra/database/db');

class UserRepository {
  getAllUsers() {
    const usersData = db.getUsers();
    const users = usersData.map(userData => new User(userData.id, userData.name, userData.email));
    return users;
  }

  getUserById(id) {
    const userData = db.getUserById(id);
    if (userData) {
      return new User(userData.id, userData.name, userData.email);
    }
    return null;
  }

  addUser(user) {
    const newUser = new User(user.id, user.name, user.email);
    db.addUser(newUser);
  }

  updateUser(user) {
    const updatedUser = new User(user.id, user.name, user.email);
    db.updateUser(updatedUser);
  }

  deleteUser(id) {
    db.deleteUser(id);
  }
}

module.exports = new UserRepository();