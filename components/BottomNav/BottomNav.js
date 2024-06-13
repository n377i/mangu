import { useState } from "react";
import { useRouter } from "next/router";
import {
  NavBar,
  NavLink,
  AddButton,
  AddButtonShadow,
  AddIcon,
} from "./BottomNav.styles";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

export default function BottomNav({ theme }) {
  const [isCreateOpen, setCreateOpen] = useState(false);
  const router = useRouter();

  const addRecipe = async (recipe) => {
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
  };

  return (
    <>
      <NavBar>
        <NavLink href="/">
          <img src="/assets/icon_recipes.svg" alt="Rezept-Übersicht" />
        </NavLink>
        <AddButton onClick={() => setCreateOpen(true)}>
          <AddIcon
            src={
              theme === "dark"
                ? "/assets/icon_add_dark.svg"
                : "/assets/icon_add.svg"
            }
            alt="Rezept hinzufügen"
          />
        </AddButton>
        <NavLink href="/search">
          <img src="/assets/icon_search.svg" alt="Rezept-Suche" />
        </NavLink>
      </NavBar>
      <AddButtonShadow />
      <Modal
        modalTitle="Rezept erstellen"
        isOpen={isCreateOpen}
        onClose={() => setCreateOpen(false)}
      >
        <Form
          onSubmit={addRecipe}
          onClose={() => setCreateOpen(false)}
          formName={"add-recipe"}
          theme={theme}
        />
      </Modal>
    </>
  );
}
