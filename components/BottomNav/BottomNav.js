import {
  NavBar,
  NavLink,
  AddButton,
  AddButtonShadow,
  AddIcon,
} from "./BottomNav.styles";

export default function BottomNav({ theme, onAddClick }) {
  return (
    <>
      <NavBar>
        <NavLink href="/">
          <img src="/assets/icon_recipes.svg" alt="Rezept-Übersicht" />
        </NavLink>
        <AddButton onClick={onAddClick}>
          <AddIcon
            src={
              theme === "dark"
                ? "/assets/icon_add_dark.svg"
                : "/assets/icon_add.svg"
            }
            alt="Rezept hinzufügen"
          />
        </AddButton>
        <NavLink href="#">
          <img src="/assets/icon_search.svg" alt="Rezept-Suche" />
        </NavLink>
      </NavBar>
      <AddButtonShadow />
    </>
  );
}
