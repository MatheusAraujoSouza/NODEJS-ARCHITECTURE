// table.js
fetch('/api/data')
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
      tableBody.appendChild(row);
    });
  });