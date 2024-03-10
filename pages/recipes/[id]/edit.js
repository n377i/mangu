import FormNav from "@/components/FormNav/FormNav";
import Form from "@/components/Form/Form";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Card } from "@/styles.js";
import { CenterDiv } from "@/styles.js";
import { PuffLoader } from "react-spinners";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  async function editRecipe(recipe) {
    await fetch(`/api/recipes/${id}`, {
      method: "PATCH",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  }

  if (!isReady || isLoading || error)
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );

  return (
    <>
      <FormNav />
      <Card>
        <Form
          onSubmit={editRecipe}
          formName={"edit-recipe"}
          defaultData={recipe}
        />
      </Card>
    </>
  );
}
