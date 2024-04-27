import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { PuffLoader } from "react-spinners";
import { CenterDiv } from "@/styles";
import GlobalStyle from "../styles";
import useLocalStorage from "use-local-storage";

const fetcher = (url) => fetch(url).then((response) => response.json());

export const CoverContext = createContext();

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showCover, setShowCover] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
  }, [router.pathname]);

  useEffect(() => {
    const loadThemeFromStorage = () => {
      const loadedTheme = JSON.parse(localStorage.getItem("theme")) || "light";
      setTheme(loadedTheme);
      setThemeLoaded(true);
    };

    if (!themeLoaded) {
      loadThemeFromStorage();
    }
  }, [themeLoaded, setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  if (!themeLoaded) {
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );
  }

  return (
    <CoverContext.Provider value={showCover}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </SWRConfig>
    </CoverContext.Provider>
  );
}
