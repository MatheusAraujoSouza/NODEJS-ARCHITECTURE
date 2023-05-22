
# architecture of API
```
- src
  - app
    - controllers
      - userController.js
    - services
      - userService.js
  - domain
    - models
      - User.js
    - repositories
      - userRepository.js
  - infra
    - database
      - db.js
  - index.js
```


1. User.js (Domain Model):

- Defines the structure and behavior of a user object.
- Contains properties such as id, name, and email.
2. userRepository.js (Domain Repository):

- Provides an interface to perform CRUD operations related to users.
- Implements methods to interact with the database or any external data -store.

3. userService.js (Application Service):

- Contains the business logic related to users.
Utilizes the userRepository to perform CRUD operations.
Handles any additional application-level operations or validations.
4. userController.js (Application Controller):

- Handles incoming HTTP requests related to users.
Calls appropriate methods from the userService to process the requests.
Sends the HTTP response back to the client.

5. db.js (Infrastructure Database):

- Represents the connection to the database or any external data store.
Provides methods to perform database operations such as querying, inserting, updating, and deleting data.

6. index.js (Entry Point):

- Sets up the Express server and defines the API routes.
Imports the necessary components from the domain, application, and infrastructure layers.
Handles HTTP requests and forwards them to the appropriate controllers.
This structure allows for a clear separation of concerns, with the domain layer containing the core business logic, the application layer handling application-specific operations, and the infrastructure layer dealing with external dependencies.