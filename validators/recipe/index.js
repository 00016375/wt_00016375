// Import necessary modules
const { body, param } = require('express-validator');
const recipe_service = require('../../services/recipe');

// Validation function for adding a recipe
const addRecipeValidation = () => {
  return [
    body('recipeName')
      .notEmpty().withMessage('Recipe name must not be empty')
      .isLength({ min: 2, max: 500 }).withMessage('Recipe name must be between 2 and 500 characters long'),
    body('ingredients')
      .notEmpty().withMessage('Ingredients must not be empty'),
    body('steps')
      .notEmpty().withMessage('Steps must not be empty'),
    body('category')
      .notEmpty().withMessage('Category must not be empty'),
  ];
};

// Validation function for deleting a recipe
const deleteRecipeValidation = () => {
  return [
    param('id').custom(async (id) => {
        const exists = await recipe_service.getById(id);
        if (!exists) {
          throw new Error('Recipe not found');
        }
    })
  ];
};

// Validation function for updating a recipe
const updateRecipeValidation = () => {
  return [
    param('id').custom(async (id) => {
        const exists = await recipe_service.getById(id);
        if (!exists) {
          throw new Error('Recipe not found');
        }
    }),
    body('recipeName')
      .notEmpty().withMessage('Recipe name must not be empty')
      .isLength({ min: 2, max: 500 }).withMessage('Recipe name must be between 2 and 500 characters long'),
    body('ingredients')
      .notEmpty().withMessage('Ingredients must not be empty'),
    body('steps')
      .notEmpty().withMessage('Steps must not be empty'),
    body('category')
      .notEmpty().withMessage('Category must not be empty'),
  ];
};

// Export the validation functions
module.exports = {
    addRecipeValidation,
    updateRecipeValidation,
    deleteRecipeValidation
};