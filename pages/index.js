import { useContext, useState } from "react";
import { CoverContext } from "@/pages/_app";
import RecipeList from "@/components/RecipeList/RecipeList";
import BottomNav from "@/components/BottomNav/BottomNav";
import TopNav from "@/components/TopNav/TopNav";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";
import { useRouter } from "next/router";

const MainContent = styled.main`
  padding: 95px 0 100px;
`;

export default function HomePage({ theme, toggleTheme }) {
  const showCover = useContext(CoverContext);
  const [gridColumns, setGridColumns] = useLocalStorage("gridColumns", 2);
  const [isCreateOpen, setCreateOpen] = useState(false);
  const router = useRouter();

  const toggleGridColumns = () => {
    if (gridColumns === 2) {
      setGridColumns(3);
    } else if (gridColumns === 3) {
      setGridColumns(1);
    } else {
      setGridColumns(2);
    }
  };

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
      {!showCover && (
        <>
          <TopNav
            onToggleGridColumns={toggleGridColumns}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <MainContent>
            <RecipeList gridColumns={gridColumns} />
          </MainContent>
          <BottomNav theme={theme} onAddClick={() => setCreateOpen(true)} />
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
      )}
    </>
  );
}
