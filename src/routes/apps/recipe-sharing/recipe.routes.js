import { Router } from "express";
import { verifyJWT } from "../../../middlewares/auth.middlewares.js";
import { createRecipeValidator } from "../../../validators/apps/recipe-sharing/recipe.validators.js";
import { validate } from "../../../validators/validate.js";
import {
  createRecipe,
  getAllRecipes,
} from "../../../controllers/apps/recipe-sharing/recipe.controllers.js";
import { upload } from "../../../middlewares/multer.middlewares.js";
import { MAXIMUM_RECIPE_IMAGE_COUNT } from "../../../constants.js";

const router = Router();

router
  .route("/")
  .get(getAllRecipes)
  .post(
    verifyJWT,
    upload.fields([{ name: "images", maxCount: MAXIMUM_RECIPE_IMAGE_COUNT }]),
    createRecipeValidator(),
    validate,
    createRecipe
  );

export default router;
