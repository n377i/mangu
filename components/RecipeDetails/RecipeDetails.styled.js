import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 340px;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  top: -4px;
  margin-left: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Card = styled.div`
  padding: 118px 24px 45px;
  background: var(--color-white);

  ${({ $hasImage }) =>
    $hasImage &&
    `
    padding-top: 45px;
    position: relative;
    top: -36px;
    border-radius: 40px;
    z-index: 1;
  `}
`;

export const RecipeTitle = styled.h1`
  font: var(--font-heading-1);
`;

export const Section = styled.section`
  margin-top: 40px;
`;

export const SectionTitle = styled.h2`
  font: var(--font-heading-2);
  color: var(--color-orange);
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  margin-bottom: 16px;
`;

export const IngredientTable = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px 14%;
`;

export const NumberedList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

export const NumberedItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  margin-bottom: 16px;
  counter-increment: recipeStep;
`;

export const NumberCircle = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: 50%;
  background-color: var(--color-orange);
  font-weight: 400;
  color: var(--color-white);
  text-align: center;
`;
