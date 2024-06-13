import styled from "styled-components";
import BottomNav from "@/components/BottomNav/BottomNav";
import TopNav from "@/components/TopNav/TopNav";
import SearchBar from "@/components/SearchBar/SearchBar";
import useLocalStorage from "use-local-storage";

const MainContent = styled.main`
  padding: 97px 0 100px;
`;

export default function SearchPage({ theme, toggleTheme }) {
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
        <SearchBar gridColumns={gridColumns} />
      </MainContent>
      <BottomNav theme={theme} />
    </>
  );
}
