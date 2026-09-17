document.addEventListener('DOMContentLoaded', () => {
  // Fetch items from the server
  fetch('/api/items')
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector('#items-table tbody');
      tbody.innerHTML = ''; // Clear any existing rows

      data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.Name}</td>
          <td>${item.Category}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error fetching items:', error);
    });
});
