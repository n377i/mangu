import { DeleteLink } from "./DeleteButton.styled";
import Image from "next/image";

export default function DeleteButton({ deleteRecipe }) {
  return (
    <DeleteLink href={`#`} onClick={deleteRecipe}>
      <Image
        src="/assets/icon_delete_shadow.svg"
        alt="Löschen"
        width={32}
        height={34}
      />
    </DeleteLink>
  );
}
