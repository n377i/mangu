import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useLocalStorage from "use-local-storage";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light");

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

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
      </SWRConfig>
    </>
  );
}
