const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle POST request
app.post('/submit_form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Do something with the submitted data (e.g., store it in a database)
  console.log('Received data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Send a response back to the client
  res.send('Form submitted successfully!');
});

// Handle GET request
app.get('/submit_form', (req, res) => {
  const searchQuery = req.query.search;

  // Do something with the search query (e.g., perform a search)
  console.log('Received search query:', searchQuery);

  // Send a response back to the client
  res.send('Search query received: ' + searchQuery);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
