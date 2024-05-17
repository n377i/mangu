import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 50px 24px 11px;
  width: 100%;
  background: var(--color-primary);
  z-index: 1;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-block;
`;
