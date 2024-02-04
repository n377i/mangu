import { useEffect, useState } from "react";
import Loader from "@/components/Layout/Loader";

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

  return isLoading ? <Loader /> : <h1>HomePage</h1>;
}
