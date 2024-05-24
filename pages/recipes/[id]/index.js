import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import { CenterDiv } from "@/styles";
import { PuffLoader } from "react-spinners";
import RecipeDetails from "@/components/RecipeDetails/RecipeDetails";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";

export default function DetailsPage({ theme }) {
  const router = useRouter();
  const { id } = router.query;
  const [isEditOpen, setEditOpen] = useState(false);

  const {
    data: recipe,
    isLoading,
    error,
    mutate: mutateRecipe,
  } = useSWR(id ? `/api/recipes/${id}` : null);

  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, { method: "DELETE" });
    router.push("/");
  }

  async function editRecipe(updatedRecipe) {
    try {
      await fetch(`/api/recipes/${id}`, {
        method: "PATCH",
        body: JSON.stringify(updatedRecipe),
        headers: { "Content-Type": "application/json" },
      });

      mutateRecipe();
      console.log("Recipe edited successfully.");
      setEditOpen(false);
    } catch (error) {
      console.error("Error editing recipe:", error);
    }
  }

  if (isLoading || error) {
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );
  }

  return (
    <>
      <RecipeDetails
        recipe={recipe}
        id={id}
        deleteRecipe={deleteRecipe}
        theme={theme}
        onEdit={() => setEditOpen(true)}
      />
      <Modal
        modalTitle="Rezept bearbeiten"
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
      >
        <Form
          onSubmit={editRecipe}
          onClose={() => setEditOpen(false)}
          formName={"edit-recipe"}
          defaultData={recipe}
          theme={theme}
        />
      </Modal>
    </>
  );
}
