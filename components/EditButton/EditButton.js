import { EditLink } from "./EditButton.styled";
import Image from "next/image";

export default function EditButton({ id, iconType }) {
  const iconSrc =
    iconType === "orange"
      ? "/assets/icon_edit_orange.svg"
      : "/assets/icon_edit_shadow.svg";
  const height = iconType === "orange" ? 25 : 33;

  return (
    <EditLink href={`/recipes/${id}/edit`} passHref>
      <Image src={iconSrc} alt="Bearbeiten" width={33} height={height} />
    </EditLink>
  );
}
