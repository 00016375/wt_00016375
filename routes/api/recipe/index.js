// Import the necessary modules and validators
const express = require('express');
const { validationResult } = require('express-validator');
const {
    addRecipeValidation,
    updateRecipeValidation,
    deleteRecipeValidation
} = require('../../../validators/recipe');

// Create a new router instance
const router = express.Router();

// Import the recipe_controller module
const recipe_controller = require('../../../controllers/api/recipe');

// Define API routes
router.get('/', (req, res) => {
    // Handle the GET request to fetch all recipes
    recipe_controller.getAll(req, res);
});

router.post('/', addRecipeValidation(), (req, res) => {
    // Validate the request body using the addRecipeValidation middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are validation errors, return a 400 (Bad Request) response with the errors array
        return res.status(400).json({ errors: errors.array() });
    }

    // Handle the POST request to create a new recipe
    recipe_controller.create(req, res);
});

router.put('/:id', updateRecipeValidation(), (req, res) => {
    // Validate the request body using the updateRecipeValidation middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are validation errors, return a 400 (Bad Request) response with the errors array
        return res.status(400).json({ errors: errors.array() });
    }

    // Handle the PUT request to update an existing recipe
    recipe_controller.update(req, res);
});

router.delete('/:id', deleteRecipeValidation(), (req, res) => {
    // Validate the request body using the deleteRecipeValidation middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are validation errors, return a 400 (Bad Request) response with the errors array
        return res.status(400).json({ errors: errors.array() });
    }

    // Handle the DELETE request to delete an existing recipe
    recipe_controller.delete(req, res);
});

// Export the router to be used by other modules
module.exports = router;