import { recipes } from "@/lib/data";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Caption = styled.figcaption`
  text-align: center;
  margin-top: 0.25rem;
`;

export default function RecipeList() {
  return (
    <GridContainer>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <figure>
            <ImageContainer>
              <Image 
                src={recipe.image} 
                alt={recipe.name}
              />
            </ImageContainer>
            <Caption>{recipe.name}</Caption>
          </figure>
        </div>
      ))}
    </GridContainer>
  );
}
