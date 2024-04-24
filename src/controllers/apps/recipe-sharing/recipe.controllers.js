import { Recipe } from "../../../models/apps/recipe-sharing/recipe.models.js";
import { ApiError } from "../../../utils/ApiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import {
  getLocalPath,
  getMongoosePaginationOptions,
  getStaticFilePath,
} from "../../../utils/helpers.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";

const createRecipe = asyncHandler(async (req, res) => {
  const { title, description, ingredients, steps } = req.body;

  const images =
    req.files.images && req.files.images?.length
      ? req.files.images.map((image) => {
          const imageUrl = getStaticFilePath(req, image.filename);
          const imageLocalPath = getLocalPath(image.filename);
          return { url: imageUrl, localPath: imageLocalPath };
        })
      : [];

  const author = req.user._id;

  const post = await Recipe.create({
    title,
    description,
    ingredients,
    steps,
    images,
    author,
  });

  if (!post) {
    throw new ApiError(500, "Failed to create recipe");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "Recipe created successfully", post));
});

const getAllRecipes = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const recipes = await Recipe.aggregatePaginate(
    Recipe.aggregate(),
    getMongoosePaginationOptions({
      page,
      limit,
      customLabels: {
        totalDocs: "total",
        docs: "recipes",
      },
    })
  );

  return res.status(200).json(new ApiResponse(200, recipes, "Recipes fetched"));
});

export { createRecipe, getAllRecipes };
