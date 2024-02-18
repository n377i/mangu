import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.div`
  padding: 55px 0 80px;
  background: var(--color-gradient);
`;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
`;

const FormHeading = styled.h1`
  font: var(--font-form-heading);
  color: var(--color-white);
`;

export default function FormNav() {
  const router = useRouter();
  const isCreate = router.pathname === "/create";
  const headingText = isCreate ? "Rezept hinzufügen" : "Rezept bearbeiten";

  return (
    <>
      <NavContainer>
        <Nav>
          <Link href="/">
            <img src="/assets/icon_arrow-left.svg" alt="Go back" />
          </Link>
          <FormHeading>{headingText}</FormHeading>
          <Link href="#">
            <img src="/assets/icon_settings--white.svg" alt="Settings" />
          </Link>
        </Nav>
      </NavContainer>
    </>
  );
}
