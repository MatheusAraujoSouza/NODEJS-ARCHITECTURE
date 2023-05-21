const User = require('../../domain/models/User');
const db = require('../../infra/database/db');

class UserRepository {
  async getAllUsers() {
    const usersData = db.getUsers();
    const users = usersData.map(userData => new User(userData.id, userData.name, userData.email));
    return users;
  }

  async getUserById(id) {
    const userData = db.getUserById(id);
    if (userData) {
      return new User(userData.id, userData.name, userData.email);
    }
    return null;
  }
  
  async createUser(userData) {
    const newUser = new User(userData.id, userData.name, userData.email);
    db.addUser(newUser);
    return newUser;
  }

  async addUser(user) {
    const newUser = new User(user.id, user.name, user.email);
    db.addUser(newUser);
  }

  async updateUser(user) {
    const updatedUser = new User(user.id, user.name, user.email);
    db.updateUser(updatedUser);
  }

  async deleteUser(id) {
    db.deleteUser(id);
  }
}

module.exports = new UserRepository();
