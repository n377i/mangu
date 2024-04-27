import { Button, NavContainer } from "./TopNav.styles";
import ThemeButton from "../ThemeButton/ThemeButton";

export default function TopNav({ onToggleGridColumns, toggleTheme }) {
  return (
    <NavContainer>
      <Button onClick={onToggleGridColumns} aria-label="Layout anpassen">
        <img src="/assets/icon_grid.svg" alt="Layout anpassen" />
      </Button>
      <img src="/assets/lettermark.svg" alt="Mangu Lettermark" />
      <ThemeButton
        toggleTheme={toggleTheme}
        iconSrc="/assets/icon_theme_orange.svg"
      />
    </NavContainer>
  );
}
