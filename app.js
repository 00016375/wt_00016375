// Import required modules
const express = require('express'); // Import the Express framework
const body_parser = require('body-parser'); // Import the body-parser module
const path = require('path'); // Import the path module

// Set up global variables
global.mock_db = path.join(__dirname, './data/mock_db.json'); // Set the global variable "mock_db" to the path of the mock database file

// Import route modules
const web_route = require('./routes/web'); // Import the web route module
const api_route = require('./routes/api'); // Import the API route module

// Create an Express application
const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');

// Serve static files from the "public" directory
app.use('/css', express.static('public/css')); // Serve CSS files from "/css" URL
app.use('/js', express.static('public/js')); // Serve JavaScript files from "/js" URL

// Parse incoming request bodies
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Set up routes
app.use('/api', api_route); // Use the API routes defined in the "api_route" module
app.use('/', web_route); // Use the web routes defined in the "web_route" module

// Redirect all other routes to the home page
app.use((req, res) => {
    res.redirect('/');
});

// Start the server
const port = 3000; // Set the port number to 3000
app.listen(port, () => console.log(`Server running on port ${port}`)); // Start the server and log a message to the console