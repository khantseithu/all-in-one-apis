import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const recipeCommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

recipeCommentSchema.plugin(mongooseAggregatePaginate);

export const RecipeComment = mongoose.model(
  "RecipeComment",
  recipeCommentSchema
);
