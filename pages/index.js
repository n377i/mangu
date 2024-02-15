import { useState, useEffect } from "react";
import Cover from "@/components/Layout/Cover";
import RecipeList from "@/components/RecipeList";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import styled from "styled-components";

const MainContent = styled.main`
  padding: 91px 0 100px;
`;

export default function HomePage() {
  const [showCover, setShowCover] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
