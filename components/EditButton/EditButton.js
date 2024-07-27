import { Button } from "./EditButton.styled";
import Image from "next/image";

export default function EditButton({ onEdit, iconType }) {
  const iconSrc =
    iconType === "orange"
      ? "/assets/icon_edit_orange.svg"
      : "/assets/icon_edit_shadow.svg";
  const height = iconType === "orange" ? 25 : 33;

  return (
    <Button onClick={onEdit}>
      <Image
        src={iconSrc}
        alt="Bearbeiten"
        width={33}
        height={height}
        priority
      />
    </Button>
  );
}
