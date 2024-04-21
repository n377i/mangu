import {
  ButtonWrapper,
  Card,
  ImageContainer,
  Image,
  IngredientTable,
  NumberedList,
  NumberCircle,
  NumberedItem,
  RecipeTitle,
  Section,
  SectionTitle,
  Paragraph,
} from "./RecipeDetails.styled";
import BackButton from "../BackButton/BackButton";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Fragment } from "react";

export default function RecipeDetails({ recipe, id, deleteRecipe }) {
  const renderIngredients = () => {
    if (!recipe.ingredients) return null;
    const lines = recipe.ingredients.split("\n");

    return (
      <IngredientTable>
        {lines.map((line, index) => {
          const matches = line.match(/^(\d+(\.\d+)?)\s*(\S*)\s+(.*)$/);
          const quantityUnit = matches ? `${matches[1]} ${matches[3]}` : "";
          const ingredient = matches ? matches[4] : line.trim();

          return (
            <Fragment key={index}>
              <span>{quantityUnit && <strong>{quantityUnit}</strong>}</span>
              <span>{ingredient}</span>
            </Fragment>
          );
        })}
      </IngredientTable>
    );
  };

  const renderPreparation = () => {
    if (!recipe.preparation) return null;
    const preparationArray = recipe.preparation.split("\n");

    if (preparationArray.length === 1) {
      return <p>{preparationArray[0]}</p>;
    }

    return preparationArray.map((step, index) => (
      <NumberedItem key={index}>
        <NumberCircle>{index + 1}</NumberCircle> <span>{step}</span>
      </NumberedItem>
    ));
  };

  return (
    <>
      {recipe.image && (
        <ImageContainer>
          <ButtonWrapper>
            <BackButton iconType="shadow" />
            <EditButton id={id} iconType="shadow" />
            <DeleteButton deleteRecipe={deleteRecipe} iconType="shadow" />
          </ButtonWrapper>
          <Image src={`${recipe.image}`} alt={recipe.title} />
        </ImageContainer>
      )}
      <Card $hasImage={!!recipe.image}>
        {!recipe.image && (
          <>
            <BackButton iconType="orange" />
            <EditButton id={id} iconType="orange" />
            <DeleteButton deleteRecipe={deleteRecipe} iconType="orange" />
          </>
        )}
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <Section>
          <SectionTitle>Zutaten</SectionTitle>
          <Paragraph>
            Für <strong>{recipe.servings}</strong> Portionen
          </Paragraph>
          {renderIngredients()}
        </Section>
        <Section>
          <SectionTitle>Zubereitung</SectionTitle>
          <NumberedList>{renderPreparation()}</NumberedList>
        </Section>
      </Card>
    </>
  );
}
