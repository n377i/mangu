import FormNav from "@/components/FormNav/FormNav";
import Form from "@/components/Form/Form";
import { Card } from "@/styles";
import { useRouter } from "next/router";

export default function CreateRecipePage({ theme, toggleTheme }) {
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
      const data = await response.json();
      const { _id } = data;
      router.push(`/recipes/${_id}`);
    } else {
      console.error(response.status);
    }
  }

  return (
    <>
      <FormNav theme={theme} toggleTheme={toggleTheme} />
      <Card>
        <Form onSubmit={addRecipe} formName={"add-recipe"} theme={theme} />
      </Card>
    </>
  );
}
