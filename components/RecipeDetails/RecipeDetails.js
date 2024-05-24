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
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Fragment } from "react";
import BackButton from "../BackButton/BackButton";

const convertFraction = (value) => {
  const fractions = {
    "1/2": "½",
    "1/3": "⅓",
    "2/3": "⅔",
    "1/4": "¼",
    "3/4": "¾",
    "1/5": "⅕",
    "2/5": "⅖",
    "3/5": "⅗",
    "4/5": "⅘",
    "1/6": "⅙",
    "5/6": "⅚",
    "1/8": "⅛",
    "3/8": "⅜",
    "5/8": "⅝",
    "7/8": "⅞",
  };

  // Mixed fraction
  if (value.includes(" ")) {
    const [whole, rest] = value.split(" ");
    return `${whole} ${convertFraction(rest)}`;
  }

  // Fraction
  if (fractions[value]) {
    return fractions[value];
  }

  // Integer
  return value;
};

export default function RecipeDetails({ recipe, deleteRecipe, onEdit }) {
  const renderIngredients = () => {
    if (!recipe.ingredients) return null;
    const lines = recipe.ingredients.split("\n");

    const units = [
      "g",
      "Gramm",
      "mg",
      "Milligramm",
      "kg",
      "Kilogramm",
      "Lb",
      "lb",
      "Pf",
      "Pf.",
      "Pfund",
      "ml",
      "Milliliter",
      "l",
      "Liter",
      "EL",
      "El",
      "Esslöffel",
      "TL",
      "Tl",
      "Teelöffel",
      "Tasse",
      "Tassen",
      "c",
      "Cup",
      "Cups",
      "Becher",
      "Bch",
      "Bch.",
      "Fl",
      "Fl.",
      "Flasche",
      "Flaschen",
      "Gl",
      "Gl.",
      "Glas",
      "Gläser",
      "Btl",
      "Btl.",
      "Beutel",
      "Dose",
      "St",
      "St.",
      "Stk",
      "Stk.",
      "Stück",
      "Stücke",
      "Scheibe",
      "Scheiben",
      "Stange",
      "Stangen",
      "Pck.",
      "Packung",
      "Packungen",
      "Päckchen",
      "Bd",
      "Bd.",
      "Bund",
      "Blatt",
      "Blätter",
      "Bl.",
      "Prise",
      "Schuss",
      "Spritzer",
      "Messerspitze",
    ];

    return (
      <IngredientTable>
        {lines.map((line, index) => {
          let quantity = "";
          let unit = "";
          let ingredient = "";

          const words = line.split(" ");
          for (let i = 0; i < words.length; i++) {
            const word = words[i];
            if (units.includes(word)) {
              // word is a unit -> add it to 'unit', everything after to 'ingredient'
              unit = word;
              ingredient = words.slice(i + 1).join(" ");
              break;
            } else if (/^\d/.test(word)) {
              // word begins with number -> add it to 'quantity'
              quantity += word + " ";
            } else {
              // otherwise add it to 'ingredient'
              ingredient += word + " ";
            }
          }

          // Remove spaces
          quantity = quantity.trim();
          ingredient = ingredient.trim();

          // Convert fractions to Unicode equivalents
          quantity = convertFraction(quantity);

          return (
            <Fragment key={index}>
              <span>
                {quantity && (
                  <strong>
                    {quantity} {unit}
                  </strong>
                )}
              </span>
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
      return <Paragraph>{preparationArray[0]}</Paragraph>;
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
            <EditButton onEdit={onEdit} iconType="shadow" />
            <DeleteButton deleteRecipe={deleteRecipe} iconType="shadow" />
          </ButtonWrapper>
          <Image src={`${recipe.image}`} alt={recipe.title} />
        </ImageContainer>
      )}
      <Card $hasImage={!!recipe.image}>
        {!recipe.image && (
          <>
            <BackButton iconType="orange" />
            <EditButton onEdit={onEdit} iconType="orange" />
            <DeleteButton deleteRecipe={deleteRecipe} iconType="orange" />
          </>
        )}
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <Section>
          <SectionTitle>Zutaten</SectionTitle>
          <Paragraph>
            Für <strong>{recipe.servings}</strong>{" "}
            {recipe.servings === 1 ? "Portion" : "Portionen"}
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
