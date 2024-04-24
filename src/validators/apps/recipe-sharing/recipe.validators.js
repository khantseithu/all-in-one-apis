import { body } from "express-validator";

const createRecipeValidator = () => {
  return [
    body("title").trim().notEmpty().withMessage("Recipe title is required"),
    body("description").optional(),
    body("ingredients")
      .trim()
      .notEmpty()
      .withMessage("Ingredients are required"),
    body("steps").trim().notEmpty().withMessage("Steps are required"),
    body("tags")
      .optional()
      .isArray()
      .withMessage("Tags field must be an array"),
  ];
};

export { createRecipeValidator };
