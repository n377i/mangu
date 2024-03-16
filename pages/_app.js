import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) => fetch(url).then((response) => response.json());

export const CoverContext = createContext();

export default function MyApp({ Component, pageProps }) {
  const [showCover, setShowCover] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isReloaded =
      typeof window !== "undefined" &&
      window.performance &&
      window.performance.navigation.type ===
        window.performance.navigation.TYPE_RELOAD;

    if (isReloaded && router.pathname === "/") {
      setShowCover(true);
      const timer = setTimeout(() => {
        setShowCover(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <CoverContext.Provider value={showCover}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </CoverContext.Provider>
  );
}
