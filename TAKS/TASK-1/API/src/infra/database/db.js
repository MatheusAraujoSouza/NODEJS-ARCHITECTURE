// src/infra/database/db.js

// Simulating a database connection
class Database {
  
    constructor() {
      this.users = [
        { id: '44b8a171-dfb7-459a-815d-dac396245417', name: 'John Doe', email: 'john@example.com' },
        { id: '4a6ebcec-a126-4877-9e6c-b32011367fbe', name: 'Rose', email: 'Rose@example.com' },
        { id: 'f55b8c8f-fae0-4626-ac20-aa5ce7c84a47', name: 'Leon', email: 'leon@example.com' },
        { id: '1883a2a1-6f09-49eb-a517-6e7ff02e3fdb', name: 'Whalker', email: 'whalker123154@example.com' },
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
      const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.users[index] = user;
      }
      return user;
    }
  
    deleteUser(id) {
      const index = this.users.findIndex(user => user.id == id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
  }
  
  module.exports = new Database();