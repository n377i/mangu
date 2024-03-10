import Link from "next/link";
import {
  NavBar,
  NavLink,
  AddButton,
  AddButtonShadow,
  AddIcon,
} from "./BottomNav.styles";

export default function BottomNav() {
  return (
    <>
      <NavBar>
        <NavLink href="/">
          <img src="/assets/icon_recipes.svg" alt="Recipes" />
        </NavLink>
        <Link href="/create">
          <AddButton>
            <AddIcon src="/assets/icon_add.svg" alt="Add" />
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
