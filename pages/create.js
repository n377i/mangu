import FormNav from "@/components/FormNav/FormNav";
import Form from "@/components/Form/Form";
import { Card } from "@/styles";
import { useRouter } from "next/router";

export default function CreateRecipePage() {
  const router = useRouter();

  async function addRecipe(recipe) {
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(response.status);
    }
  }

  return (
    <>
      <FormNav />
      <Card>
        <Form onSubmit={addRecipe} formName={"add-recipe"} />
      </Card>
    </>
  );
}
