// Import the express module
const express = require('express');

// Import the home_router module
const home_router = require('./home');

// Create a new router instance
const router = express.Router();

// Registering child routers
router.use('/', home_router);

// Export the router to be used by other modules
module.exports = router;