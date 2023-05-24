fetch('/api/users')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#data-table tbody');

    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
      `;

      // Add buttons for CRUD operations
      const crudButtons = document.createElement('td');
      crudButtons.innerHTML = `
        <button onclick="getUser(${item.id})">View</button>
        <button onclick="editUser(${item.id})">Edit</button>
        <button onclick="deleteUser(${item.id})">Delete</button>
      `;
      row.appendChild(crudButtons);

      tableBody.appendChild(row);
    });
  });

function getUser(id) {
  fetch(`/api/users/${id}`, { method: 'GET' })
    .then(response => response.json())
    .then(user => {
      // Display user details or perform other actions
      console.log(user);
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
}

function editUser(id) {
  fetch(`/api/users/${id}`)
    .then(response => response.json())
    .then(user => {
      // Implement logic to edit the user directly in the table
      const nameElement = document.querySelector(`#data-table tr[data-id="${id}"] td.name`);
      const emailElement = document.querySelector(`#data-table tr[data-id="${id}"] td.email`);

      // For example, you can enable editing by making the fields editable
      nameElement.contentEditable = true;
      emailElement.contentEditable = true;
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
}

function deleteUser(id) {
  if (confirm('Are you sure you want to delete this user?')) {
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(result => {
        // Handle successful deletion
        console.log(result);
        // Remove the deleted row from the table
        const row = document.querySelector(`#data-table tr[data-id="${id}"]`);
        if (row) {
          row.remove();
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }
}

function createUser(user) {
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      // Handle successful creation
      console.log(data);

      // Create a new row for the created user and add it to the table
      const tableBody = document.querySelector('#data-table tbody');
      const row = document.createElement('tr');
      row.setAttribute('data-id', data.id);
      row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>
          <button onclick="getUser(${data.id})">View</button>
          <button onclick="editUser(${data.id})">Edit</button>
          <button onclick="deleteUser(${data.id})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    })
    .catch(error => {
      console.error('Error creating user:', error);
    });
}
// Add event listener to the form's submit event
document.getElementById('create-user-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Create a user object with the input values
  const user = {
    name: "Bruna",
    email: "Bruna@example.com"
  };

  // Call the createUser function with the user object
  createUser(user);
});
