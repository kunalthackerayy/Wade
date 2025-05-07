// Import the built-in 'http' module to create a server
const http = require('http');

// Define the port number where the server will listen
const PORT = 3000;

// Create the server using http.createServer() method
const server = http.createServer((req, res) => {
  // Set the response header to specify plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Routing logic: check the requested URL path
  if (req.url === '/') {
    res.statusCode = 200; // OK
    res.end('Welcome to the Home Page');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('This is the About Page');
  } else {
    res.statusCode = 404; // Not Found
    res.end('Page Not Found');
  }
});

// Start the server and make it listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
