import useSWR from "swr";
import Link from "next/link";
import { PuffLoader } from "react-spinners";
import { CenterDiv } from "@/styles";

export default function RecipeList() {
  const { data, isLoading } = useSWR("/api/recipes", { fallbackData: [] });

  if (!data || isLoading) {
    return (
      <CenterDiv>
        <PuffLoader color="#fea500" />
      </CenterDiv>
    );
  }

  return (
    <GridContainer>
      {data.map((recipe) => (
        <Link href={`/recipes/${recipe._id}`} key={recipe._id}>
          <figure>
            <ImageContainer>
              <Image src={`${recipe.image}`} alt={recipe.title} />
            </ImageContainer>
            <Caption>{recipe.title}</Caption>
          </figure>
        </Link>
      ))}
    </GridContainer>
  );
}
