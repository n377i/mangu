import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  image: { type: String, required: false },
  title: { type: String, required: true },
  servings: { type: Number, required: true },
  ingredients: { type: String, required: true },
  preperation: { type: String, required: true },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
