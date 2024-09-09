import { useRouter } from "next/router";
import { BackLink } from "./BackButton.styled";
import Image from "next/image";

export default function BackButton({ iconType, $isDefaultIcon, theme }) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.back();
  };

  let iconSrc;
  switch (iconType) {
    case "orange":
      iconSrc = "/assets/icon_back_orange.svg";
      break;
    case "shadow":
      iconSrc = "/assets/icon_back_shadow.svg";
      break;
    default:
      iconSrc =
        theme === "dark"
          ? "/assets/icon_back_dark.svg"
          : "/assets/icon_back.svg";
  }

  const width = iconType === "shadow" ? 23 : 15;
  const height = iconType === "shadow" ? 32 : 24;

  return (
    <BackLink
      href="#"
      aria-label="Zurück"
      onClick={handleClick}
      $isDefaultIcon={$isDefaultIcon}
    >
      <Image src={iconSrc} alt="Zurück" width={width} height={height} />
    </BackLink>
  );
}
