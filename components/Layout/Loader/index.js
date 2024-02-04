import Logo from "@/public/logo.svg";
import { useState, useEffect } from "react";

export default function Loader() {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    setIsLogoVisible(true);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #fea500, #fe9800)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Logo
        style={{
          transform: isLogoVisible ? "scale(1)" : "scale(0.8)",
          transition: "transform 1.5s ease-in-out",
        }}
      />
    </div>
  );
}
