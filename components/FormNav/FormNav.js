import { useRouter } from "next/router";
import { NavContainer, Nav, FormHeading } from "./FormNav.styles";
import BackButton from "../BackButton/BackButton";
import ThemeButton from "../ThemeButton/ThemeButton";

export default function FormNav({ theme, toggleTheme }) {
  const router = useRouter();
  const isCreate = router.pathname === "/create";
  const headingText = isCreate ? "Rezept hinzufügen" : "Rezept bearbeiten";
  const iconSrc =
    theme === "dark" ? "/assets/icon_theme_dark.svg" : "/assets/icon_theme.svg";

  return (
    <>
      <NavContainer>
        <Nav>
          <BackButton $isDefaultIcon theme={theme} />
          <FormHeading>{headingText}</FormHeading>
          <ThemeButton toggleTheme={toggleTheme} iconSrc={iconSrc} />
        </Nav>
      </NavContainer>
    </>
  );
}
