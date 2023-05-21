// src/infra/database/db.js

// Simulating a database connection
class Database {
    constructor() {
      this.users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Rose', email: 'Rose@example.com' },
        { id: 3, name: 'Leon', email: 'leon@example.com' },
        { id: 4, name: 'Whalker', email: 'whalker123154@example.com' },
        // Add more users as needed
      ];
    }
  
    getUsers() {
      return this.users;
    }
  
    getUserById(id) {
      return this.users.find(user => user.id == id);
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    updateUser(user) {
      const index = this.users.findIndex(u => u.id == user.id);
      if (index !== -1) {
        this.users[index] = user;
      }
    }
  
    deleteUser(id) {
      const index = this.users.findIndex(user => user.id == id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
  }
  
  module.exports = new Database();