// server.js

const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const { exec } = require('child_process'); // Add this line to require the 'child_process' module
const app = express();
const port = 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: '10.147.17.110',
  user: 'WebServer',       // don't change this!
  password: 'password',
  database: 'pokedex'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve SplashPage.html as the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SplashPage', 'SplashPage.html'));
});

// API route to get list of Pokémon
app.get('/api/pokemon', (req, res) => {
  const sql = 'SELECT * FROM pokemon';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching Pokémon:', err);
      res.status(500).send('Error fetching Pokémon');
      return;
    }
    res.json(results);
  });
});

// API route to get a specific Pokémon by Pokedex_ID
app.get('/api/pokemon/:id', (req, res) => {
  const sql = 'SELECT * FROM pokemon WHERE Pokedex_ID = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error('Error fetching Pokémon:', err);
      res.status(500).send('Error fetching Pokémon');
      return;
    }
    res.json(results[0]);
  });
});

// API route to get list of moves
app.get('/api/moves', (req, res) => {
    const sql = 'SELECT * FROM moves'; // Replace 'moves' with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching moves:', err);
            res.status(500).send('Error fetching moves');
            return;
        }
        res.json(results);
    });
});

// API route to get list of items
app.get('/api/items', (req, res) => {
    const sql = 'SELECT * FROM items'; // Replace 'items' with your actual table name
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching items:', err);
            res.status(500).send('Error fetching items');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  // Open the default web browser and navigate to SplashPage.html
  exec(`start http://localhost:${port}/SplashPage/SplashPage.html`);
});

// API route to fetch all items
app.get('/api/items', (req, res) => {
  const sql = 'SELECT name, category, description, effect FROM items'; // Adjust as needed
  db.query(sql, (err, results) => {
      if (err) {
          console.error('Error fetching items:', err);
          res.status(500).send('Error fetching items');
          return;
      }
      res.json(results);
  });
});
