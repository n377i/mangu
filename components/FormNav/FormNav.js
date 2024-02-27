import { useRouter } from "next/router";
import { NavContainer, Nav, FormHeading } from "./FormNav.styles";
import Link from "next/link";

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
