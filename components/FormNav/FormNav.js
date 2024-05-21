import { useRouter } from "next/router";
import { NavContainer, Nav, FormHeading } from "./FormNav.styles";
import BackButton from "../BackButton/BackButton";

export default function FormNav({ theme }) {
  const router = useRouter();
  const isCreate = router.pathname === "/create";
  const headingText = isCreate ? "Rezept hinzufügen" : "Rezept bearbeiten";

  return (
    <>
      <NavContainer>
        <Nav>
          <BackButton $isDefaultIcon theme={theme} />
          <FormHeading>{headingText}</FormHeading>
        </Nav>
      </NavContainer>
    </>
  );
}
