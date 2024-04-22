import { useContext } from "react";
import { CoverContext } from "@/pages/_app";
import Cover from "@/components/Cover/Cover";
import RecipeList from "@/components/RecipeList/RecipeList";
import BottomNav from "@/components/BottomNav/BottomNav";
import TopNav from "@/components/TopNav/TopNav";
import styled from "styled-components";
import useLocalStorage from "use-local-storage";

const MainContent = styled.main`
  padding: 91px 0 100px;
`;

export default function HomePage() {
  const showCover = useContext(CoverContext);
  const [gridColumns, setGridColumns] = useLocalStorage("gridColumns", 2);

  const toggleGridColumns = () => {
    if (gridColumns === 2) {
      setGridColumns(3);
    } else if (gridColumns === 3) {
      setGridColumns(1);
    } else {
      setGridColumns(2);
    }
  };

  return (
    <>
      {showCover && <Cover />}
      {!showCover && (
        <>
          <TopNav onToggleGridColumns={toggleGridColumns} />
          <MainContent>
            <RecipeList gridColumns={gridColumns} />
          </MainContent>
          <BottomNav />
        </>
      )}
    </>
  );
}
