// Import the recipe_service module
const recipe_service = require('../../../services/recipe');

// Define the home_controller object
const home_controller = {
    // Controller function for handling the GET request to the home page
    index: async (req, res) => {
        // Render the 'home' view
        res.render('home');
    },
    
    // Controller function for handling the GET request to add a recipe
    add: async (req, res) => {
        // Render the 'home/add_update' view with the 'mode' variable set to 'Add'
        res.render('home/add_update', { mode: 'Add' });
    },
    
    // Controller function for handling the GET request to update a recipe
    update: async (req, res) => {
        // Retrieve the recipe data with the given ID using the getById() function from the recipe_service
        const eventData = await recipe_service.getById(req.params.id);
        
        // Render the 'home/add_update' view with the 'mode' variable set to 'Update' and the 'recipeData' variable set to the retrieved recipe data
        res.render('home/add_update', { mode: 'Update', recipeData: eventData });
    }
};

// Export the home_controller object to be used by other modules
module.exports = home_controller;