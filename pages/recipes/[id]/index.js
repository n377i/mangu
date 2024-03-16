import useSWR from "swr";
import { useRouter } from "next/router";
import { Card } from "@/styles";
import { CenterDiv } from "@/styles";
import { PuffLoader } from "react-spinners";
import Link from "next/link";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 340px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  if (!id) {
    return <p>ID not found</p>;
  }

  const { data: recipe, isLoading, error } = useSWR(`/api/recipes/${id}`);

  if (!isReady || isLoading || error)
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );

  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return (
    <>
      <ImageContainer>
        <Link href={`/`}>Back to home</Link>
        <Link href={`/recipes/${id}/edit`} passHref legacyBehavior>
          Edit
        </Link>
        <Link href={`#`} onClick={deleteRecipe}>
          Delete
        </Link>
        <Image src={`${recipe.image}`} alt={recipe.title} />
      </ImageContainer>
      <Card>
        <h1>{recipe.title}</h1>
        <h2>Zutaten</h2>
        <p>
          Für <strong>{recipe.servings}</strong> Portionen
        </p>
        <p>{recipe.ingredients}</p>
        <h2>Zubereitung</h2>
        <p>{recipe.preparation}</p>
      </Card>
    </>
  );
}
