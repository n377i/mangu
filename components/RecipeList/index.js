import { recipes } from "@/lib/data";

export default function RecipeList() {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} />
        </div>
      ))}
    </div>
  );
  å;
}
