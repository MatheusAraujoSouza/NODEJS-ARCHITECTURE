const User = require('../../domain/models/User');
const db = require('../../infra/database/db');
const { v4: uuidv4 } = require('uuid');

class UserRepository {
  
  async getAllUsers() {
    const usersData = await db.getUsers();
    const users = usersData.map(userData => new User(userData.id, userData.name, userData.email));
    return users;
  }

  async getUserById(id) {
    const userData = await db.getUserById(id);
    if (userData) {
      return new User(userData.id, userData.name, userData.email);
    }
    return null;
  }

  async createUser(name,email) {
    const newUser = new User(uuidv4(), name, email);
    await db.addUser(newUser);
    return newUser;
  }

  async updateUser(userId, user) {
    const updatedUser = new User(userId, user.name, user.email);
    await db.updateUser(updatedUser);
    return updatedUser;
  }

  async deleteUser(id) {
    await db.deleteUser(id);
  }
}

module.exports = new UserRepository();
