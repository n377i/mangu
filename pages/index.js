import { useContext } from "react";
import { CoverContext } from "@/pages/_app";
import Cover from "@/components/Cover/Cover";
import RecipeList from "@/components/RecipeList/RecipeList";
import BottomNav from "@/components/BottomNav/BottomNav";
import TopNav from "@/components/TopNav/TopNav";
import styled from "styled-components";

const MainContent = styled.main`
  padding: 91px 0 100px;
`;

export default function HomePage() {
  const showCover = useContext(CoverContext);

  return (
    <>
      {showCover && <Cover />}
      {!showCover && (
        <>
          <TopNav />
          <MainContent>
            <RecipeList />
          </MainContent>
          <BottomNav />
        </>
      )}
    </>
  );
}
