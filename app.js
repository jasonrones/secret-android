// Import Express
const path = require('path');
const express = require('express');
const app = express();

// Server Configuration
const hostname = '0.0.0.0';
const port = 3000;

// Requests
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Initialize App
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});