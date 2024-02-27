import Link from "next/link";
import { NavContainer } from "./TopNav.styles";

export default function TopNav() {
  return (
    <>
      <NavContainer>
        <Link href="#">
          <img src="/assets/icon_grid.svg" alt="Layout anpassen" />
        </Link>
        <img src="/assets/lettermark.svg" alt="Mangu Lettermark" />
        <Link href="#">
          <img src="/assets/icon_settings.svg" alt="Einstellungen" />
        </Link>
      </NavContainer>
    </>
  );
}
