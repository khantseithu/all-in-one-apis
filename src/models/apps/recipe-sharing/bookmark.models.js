import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookmarkSchema = new Schema(
  {
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

bookmarkSchema.plugin(mongooseAggregatePaginate);

export const Bookmark = mongoose.model("RecipeBookmark", bookmarkSchema);
