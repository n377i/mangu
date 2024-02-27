import Logo from "@/public/logo.svg";
import { useState, useEffect } from "react";
import { StyledDiv } from "./Cover.styles";

export default function Cover() {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    setIsLogoVisible(true);
  }, []);

  return (
    <StyledDiv>
      <Logo
        style={{
          transform: isLogoVisible ? "scale(1)" : "scale(0.8)",
          transition: "transform 1.5s ease-in-out",
        }}
      />
    </StyledDiv>
  );
}
