import { useState, useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { PuffLoader } from "react-spinners";
import { CenterDiv } from "@/styles";
import GlobalStyle from "../styles";
import useLocalStorage from "use-local-storage";
import Cover from "@/components/Cover/Cover";

const fetcher = (url) => fetch(url).then((response) => response.json());

export const CoverContext = createContext();

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [showCover, setShowCover] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCover(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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
      {showCover && <Cover />}
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </SWRConfig>
    </CoverContext.Provider>
  );
}
