// Import the express module
const express = require('express');

// Create a new router instance
const router = express.Router();

// Import the home_controller module
const home_controller = require('../../../controllers/web/home');

// Define routes
router.get('/', home_controller.index);
router.get('/add', home_controller.add);
router.get('/update', home_controller.update);
router.get('/update/:id', home_controller.update);

// Export the router to be used by other modules
module.exports = router;