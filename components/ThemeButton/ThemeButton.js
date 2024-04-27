import { Button } from "./ThemeButton.styled";

export default function ThemeButton({ toggleTheme, iconSrc }) {
  return (
    <Button onClick={toggleTheme} aria-label="Theme wechseln">
      <img src={iconSrc} alt="Theme wechseln" />
    </Button>
  );
}
