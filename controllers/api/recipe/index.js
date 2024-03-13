// Import the recipe_service module
const recipe_service = require('../../../services/recipe');

// Define the recipe_controller object
const recipe_controller = {
    // Controller function for handling the GET request to fetch all recipes
    getAll(req, res) {
        // Call the getAll() function from the recipe_service to retrieve all recipes
        const recipes = recipe_service.getAll();
        
        // Send the retrieved recipes as a JSON response
        res.json(recipes);
    },
    
    // Controller function for handling the POST request to create a new recipe
    create(req, res) {
        // Call the create() function from the recipe_service, passing the request and response objects
        const createdRecipe = recipe_service.create(req, res);
        
        // Send the created recipe as a JSON response with the status code 201 (Created)
        res.status(201).json(createdRecipe);
    },
    
    // Controller function for handling the PUT/PATCH request to update an existing recipe
    update(req, res) {
        // Call the update() function from the recipe_service, passing the recipe ID from the request parameters and the request body
        const updatedRecipe = recipe_service.update(req.params.id, req.body);
        
        // Check if the recipe was updated successfully
        if (updatedRecipe) {
            // Send the updated recipe as a JSON response
            res.json(updatedRecipe);
        } else {
            // If the recipe is not found, send a 404 (Not Found) response
            res.status(404).send('Recipe not found');
        }
    },
    
    // Controller function for handling the DELETE request to delete an existing recipe
    delete(req, res) {
        // Call the getById() function from the recipe_service to check if the recipe with the given ID exists
        const recipe = recipe_service.getById(req.params.id);
        
        // Check if the recipe exists
        if (recipe) {
            // Call the delete() function from the recipe_service to delete the recipe
            recipe_service.delete(req.params.id);
			
            // Send a 204 (No Content) response indicating successful deletion
            res.status(204).send('Recipe deleted successfully');
        } else {
            // If the recipe is not found, send a 404 (Not Found) response
            res.status(404).send('Recipe not found');
        }
    }
};

// Export the recipe_controller object to be used by other modules
module.exports = recipe_controller;