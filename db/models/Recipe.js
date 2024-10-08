import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema({
  image: {
    url: { type: String, required: false },
    public_id: { type: String, required: false },
  },
  title: { type: String, required: true },
  servings: { type: Number, required: true },
  ingredients: { type: String, required: true },
  preparation: { type: String, required: false },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
