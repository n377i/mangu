import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 50px 24px 0;
  width: 100%;
  background: var(--color-white);
  z-index: 1;
`;

export default function TopNav() {
  return (
    <>
      <NavContainer>
        <Link href="#">
          <img src="/assets/icon_grid.svg" alt="Customize layout" />
        </Link>
        <img src="/assets/lettermark.svg" alt="Mangu lettermark" />
        <Link href="#">
          <img src="/assets/icon_settings.svg" alt="Settings" />
        </Link>
      </NavContainer>
    </>
  );
}
