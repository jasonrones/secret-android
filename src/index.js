// Import Libraries
const express = require('express');

// Define parameters
const app = express();
const hostname = '0.0.0.0';
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, Express!')
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});