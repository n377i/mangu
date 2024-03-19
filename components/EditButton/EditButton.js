import { EditLink } from "./EditButton.styled";
import Image from "next/image";

export default function EditButton({ id }) {
  return (
    <EditLink href={`/recipes/${id}/edit`} passHref>
      <Image
        src="/assets/icon_edit_shadow.svg"
        alt="Bearbeiten"
        width={33}
        height={33}
      />
    </EditLink>
  );
}
