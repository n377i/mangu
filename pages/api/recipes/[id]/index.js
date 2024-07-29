import dbConnect from "@/db/connect";
import Recipe from "@/db/models/Recipe";
import deleteImageFromCloudinary from "@/utils/cloudinary/delete-image";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const recipe = await Recipe.findById(id);

      if (!recipe) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(recipe);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else if (request.method === "PATCH") {
    try {
      const { title, ingredients, preparation, image, servings } = request.body;

      const updateFields = {};
      if (title) updateFields.title = title;
      if (servings) updateFields.servings = servings;
      if (ingredients) updateFields.ingredients = ingredients;
      if (preparation) updateFields.preparation = preparation;

      const recipeToUpdate = await Recipe.findById(id);

      if (recipeToUpdate.image && !image) {
        // Delete existing image
        if (recipeToUpdate.image.public_id) {
          await deleteImageFromCloudinary(recipeToUpdate.image.public_id);
        }
        updateFields.image = null;
      } else if (image) {
        if (
          recipeToUpdate.image &&
          recipeToUpdate.image.public_id &&
          image.public_id !== recipeToUpdate.image.public_id
        ) {
          // Delete previous image
          await deleteImageFromCloudinary(recipeToUpdate.image.public_id);
        }
        updateFields.image = image;
      }

      const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        { $set: updateFields },
        { new: true }
      );
      response.status(200).json(updatedRecipe);
    } catch (error) {
      console.error("Error updating recipe:", error);
      response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else if (request.method === "DELETE") {
    try {
      const recipeToDelete = await Recipe.findByIdAndDelete(id);
      // Delete image from Cloudinary if available
      if (
        recipeToDelete &&
        recipeToDelete.image &&
        recipeToDelete.image.public_id
      ) {
        await deleteImageFromCloudinary(recipeToDelete.image.public_id);
      }

      response.status(200).json(recipeToDelete);
    } catch (error) {
      console.error("Error deleting recipe:", error);
      response
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
