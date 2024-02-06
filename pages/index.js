import { useEffect, useState } from "react";
import Loader from "@/components/Layout/Loader";
import Recipes from "@/components/Recipes";

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

  return isLoading ? <Loader /> : <Recipes />;
}
