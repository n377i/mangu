import useSWR from "swr";
import { useRouter } from "next/router";
import { CenterDiv } from "@/styles";
import { PuffLoader } from "react-spinners";
import RecipeDetails from "@/components/RecipeDetails/RecipeDetails";

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const {
    data: recipe,
    isLoading,
    error,
  } = useSWR(id ? `/api/recipes/${id}` : null);

  if (!isReady || isLoading || error)
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );

  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return <RecipeDetails recipe={recipe} id={id} deleteRecipe={deleteRecipe} />;
}
