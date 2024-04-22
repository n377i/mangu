import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 50px 24px 7px;
  width: 100%;
  background: var(--color-white);
  z-index: 1;
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-block;
`;
