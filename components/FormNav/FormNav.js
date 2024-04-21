import { useRouter } from "next/router";
import { NavContainer, Nav, FormHeading } from "./FormNav.styles";
import Link from "next/link";
import BackButton from "../BackButton/BackButton";

export default function FormNav() {
  const router = useRouter();
  const isCreate = router.pathname === "/create";
  const headingText = isCreate ? "Rezept hinzufügen" : "Rezept bearbeiten";

  return (
    <>
      <NavContainer>
        <Nav>
          <BackButton $isDefaultIcon />
          <FormHeading>{headingText}</FormHeading>
          <Link href="#">
            <img src="/assets/icon_settings-white.svg" alt="Einstellungen" />
          </Link>
        </Nav>
      </NavContainer>
    </>
  );
}
