// Importing the 'express' library for creating the server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded form data
// This is necessary to read form data (e.g., username, password) from a POST request
app.use(express.urlencoded({ extended: false }));

// Dummy credentials for authentication
const USERNAME = 'admin';  // Correct username
const PASSWORD = '12345';  // Correct password

// Route to serve the login form
// This GET request serves the HTML form where the user can input their username and password
app.get('/', (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" required /><br><br>
      <input type="password" name="password" placeholder="Password" required /><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Optional: Redirect GET /login to the form
// In case a user types '/login' directly in the browser, this redirects them to the main form at '/'
// app.get('/login', (req, res) => {
//   res.redirect('/');  // Redirect to the login page (root)
// });

// Route to handle login logic (POST request)
// When the form is submitted, this POST route checks if the credentials match
app.post('/login', (req, res) => {
  // Extract the username and password from the form data
  const { username, password } = req.body;

  // Check if the provided credentials are correct
  if (username === USERNAME && password === PASSWORD) {
    res.send('Login Success');  // If credentials are correct, send success message
  } else {
    res.send('Login Failed');   // If credentials are incorrect, send failure message
  }
});

app.listen(PORT, () => {
  console.log(`Authentication server running at http://localhost:${PORT}`);
});
