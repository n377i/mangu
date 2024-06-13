import RecipeList from "@/components/RecipeList/RecipeList";
import BottomNav from "@/components/BottomNav/BottomNav";
import TopNav from "@/components/TopNav/TopNav";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";

const MainContent = styled.main`
  padding: 97px 0 100px;
`;

export default function HomePage({ theme, toggleTheme }) {
  const [gridColumns, setGridColumns] = useLocalStorage("gridColumns", 2);

  return (
    <>
      <TopNav
        onToggleGridColumns={() =>
          setGridColumns((prev) => (prev === 2 ? 3 : prev === 3 ? 1 : 2))
        }
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <MainContent>
        <RecipeList gridColumns={gridColumns} />
      </MainContent>
      <BottomNav theme={theme} />
    </>
  );
}
