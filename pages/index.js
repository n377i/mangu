import { useEffect, useState } from "react";
import Loader from "@/components/Layout/Loader";
import RecipeList from "@/components/RecipeList";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import styled from "styled-components";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  const MainContent = styled.main`
    padding: 91px 0 100px;
  `;

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <TopNav />
      <MainContent>
        <RecipeList />
      </MainContent>
      <BottomNav />
    </>
  );
}
