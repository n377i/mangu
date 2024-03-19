import { useRouter } from "next/router";
import { BackLink } from "./BackButton.styled";
import Image from "next/image";

export default function BackButton() {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <BackLink href="#" aria-label="Zurück" onClick={handleClick}>
      <Image
        src="/assets/icon_arrow-left_shadow.svg"
        alt="Zurück"
        width={23}
        height={32}
      />
    </BackLink>
  );
}
