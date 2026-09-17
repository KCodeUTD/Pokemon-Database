document.addEventListener('DOMContentLoaded', () => {
    // Fetch moves from the server
    fetch('/api/moves')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#items-table tbody');
            tbody.innerHTML = ''; // Clear any existing rows

            data.forEach(move => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${move.Name}</td>
                    <td>${move.type}</td>
                    <td>${move.Accuracy}</td>
                    <td>${move.Power}</td>
                    <td>${move.PP}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching moves:', error);
        });
});