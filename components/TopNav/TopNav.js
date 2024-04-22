import Link from "next/link";
import { IconButton, NavContainer } from "./TopNav.styles";

export default function TopNav({ onToggleGridColumns }) {
  return (
    <>
      <NavContainer>
        <IconButton onClick={onToggleGridColumns}>
          <img src="/assets/icon_grid.svg" alt="Layout anpassen" />
        </IconButton>
        <img src="/assets/lettermark.svg" alt="Mangu Lettermark" />
        <Link href="#">
          <img src="/assets/icon_settings.svg" alt="Einstellungen" />
        </Link>
      </NavContainer>
    </>
  );
}
