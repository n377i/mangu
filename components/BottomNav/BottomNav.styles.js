import Link from "next/link";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: var(--color-primary);
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const NavLink = styled(Link)`
  margin-top: 15px;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -28px;
  width: 70px;
  height: 70px;
  background: var(--color-gradient);
  border-radius: 50%;
  border: 4px solid var(--color-primary);
  cursor: pointer;
`;

export const AddButtonShadow = styled.div`
  position: fixed;
  left: calc(50% - 35px);
  bottom: 38px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const AddIcon = styled.img`
  width: 29px;
  height: 29px;
`;
