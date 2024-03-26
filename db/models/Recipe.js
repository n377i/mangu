import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  servings: { type: Number, required: true },
  ingredients: { type: String, required: true },
  preparation: { type: String, required: true },
  image: {
    type: new Schema({
      url: String,
      publicId: String,
    }),
  },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
