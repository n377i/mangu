import { useEffect, useState } from "react";
import Loader from "@/components/Layout/Loader";
import RecipeList from "@/components/RecipeList";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

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
      <RecipeList />
      <BottomNav />
    </>
  );
}
