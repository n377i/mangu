import { DeleteLink } from "./DeleteButton.styled";
import Image from "next/image";

export default function DeleteButton({ deleteRecipe, iconType }) {
  const iconSrc =
    iconType === "orange"
      ? "/assets/icon_delete_orange.svg"
      : "/assets/icon_delete_shadow.svg";
  const height = iconType === "orange" ? 26 : 34;

  return (
    <DeleteLink href={`#`} onClick={deleteRecipe}>
      <Image src={iconSrc} alt="Löschen" width={32} height={height} priority />
    </DeleteLink>
  );
}
