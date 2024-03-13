// Import the fs module for file system operations
const fs = require('fs');

// Access the global mock db file
const recipes = require(global.mock_db);

// Write service method implementations
const recipe_service = {
    // Returns all recipes
    getAll() {
        return recipes;
    },
    // Returns a recipe by ID
    getById(id) {
        return recipes.find(t => t.id == id);
    },
    // Creates a new recipe
    create(req, res) {
        // Generate a new ID
        let new_id = genRandId(4);

        const recipe = req.body;

        const new_recipe = {
            id: new_id,
            recipe: recipe
        };

        // Add the new recipe to the recipes array
        recipes.push(new_recipe);

        // Write the updated recipes array to the file
        writeToFile(recipes);

        return new_recipe;
    },
    // Updates a recipe by ID
    update(id, updateData) {
        const recipeIndex = recipes.findIndex(t => t.id == id);

        if (recipeIndex === -1) {
            return null;
        }

        // Merge the updateData with the existing recipe
        recipes[recipeIndex].recipe = { ...recipes[recipeIndex].recipe, ...updateData };

        // Write the updated recipes array to the file
        writeToFile(recipes);

        return recipes[recipeIndex];
    },
    // Deletes a recipe by ID
    delete(id) {
        const index = recipes.findIndex(u => u.id == id);
        recipes.splice(index, 1);
        // Write the updated recipes array to the file
        writeToFile(recipes);
    }
};

// Function for overwriting the db file with updated content
let writeToFile = async (users) => {
    await fs.writeFileSync(
        global.mock_db,
        JSON.stringify(users, null, 4),
        'utf8'
    );
};

// Function for generating a random ID
let genRandId = (count) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// Export the recipe_service object to be used by other modules
module.exports = recipe_service;