import dbConnect from "@/db/connect";
import Recipe from "@/db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(recipe);
  } else if (request.method === "PATCH") {
    try {
      const { title, ingredients, preparation, image, servings } = request.body;

      const updateFields = {};
      if (title) updateFields.title = title;
      if (servings) updateFields.servings = servings;
      if (ingredients) updateFields.ingredients = ingredients;
      if (preparation) updateFields.preparation = preparation;
      updateFields.image = image || null;

      const recipeToUpdate = await Recipe.findByIdAndUpdate(id, {
        $set: updateFields,
      });
      response.status(200).json(recipeToUpdate);
    } catch (error) {
      console.error("Error updating recipe:", error);
      return response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else if (request.method === "DELETE") {
    const recipeToDelete = await Recipe.findByIdAndDelete(id);
    response.status(200).json(recipeToDelete);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
