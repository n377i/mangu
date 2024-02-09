import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: var(--color-white);
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const NavLink = styled(Link)`
  margin-top: 15px;
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -28px;
  width: 70px;
  height: 70px;
  background: var(--color-gradient);
  border-radius: 50%;
  border: 4px solid var(--color-white);
`;

const AddIcon = styled.img`
  width: 29px;
  height: 29px;
`;

const AddButtonShadow = styled.div`
  position: fixed;
  left: calc(50% - 35px);
  bottom: 38px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--color-white);
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2);
`;

export default function BottomNav() {
  return (
    <>
      <NavBar>
        <NavLink href="/">
          <img src="/assets/icon_recipes.svg" alt="Recipes" />
        </NavLink>
        <Link href="/add-form">
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
