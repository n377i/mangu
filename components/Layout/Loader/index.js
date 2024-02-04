import Logo from "@/public/logo.svg";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(to bottom right, #fea500, #fe9800);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default function Loader() {
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
