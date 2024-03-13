// Import the express module
const express = require('express');

// Import the recipe_router module
const recipe_router = require('./recipe');

// Create a new router instance
const router = express.Router();

// Registering child routers
router.use('/recipe', recipe_router);

// Export the router to be used by other modules
module.exports = router;