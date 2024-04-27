import Link from "next/link";
import {
  NavBar,
  NavLink,
  AddButton,
  AddButtonShadow,
  AddIcon,
} from "./BottomNav.styles";

export default function BottomNav({ theme }) {
  return (
    <>
      <NavBar>
        <NavLink href="/">
          <img src="/assets/icon_recipes.svg" alt="Rezept-Übersicht" />
        </NavLink>
        <Link href="/create">
          <AddButton>
            <AddIcon
              src={
                theme === "dark"
                  ? "/assets/icon_add_dark.svg"
                  : "/assets/icon_add.svg"
              }
              alt="Rezept hinzufügen"
            />
          </AddButton>
        </Link>
        <NavLink href="#">
          <img src="/assets/icon_search.svg" alt="Search" />
        </NavLink>
      </NavBar>
      <AddButtonShadow />
    </>
  );
}
