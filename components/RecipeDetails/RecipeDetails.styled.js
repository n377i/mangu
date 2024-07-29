import styled, { css } from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 340px;
`;

export const ButtonWrapper = styled.div`
  position: relative;

  ${({ $hasImage }) =>
    $hasImage
      ? css`
          top: -4px;
          margin-left: 20px;
        `
      : css`
          top: initial; // oder der Wert, den Sie möchten, wenn $hasImage false ist
          margin-left: 24px;
        `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Card = styled.div`
  padding: 122px 24px 43px;
  background: var(--color-primary);

  ${({ $hasImage }) =>
    $hasImage &&
    `
    padding: 45px 24px 5px;
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
  color: var(--color-secondary);
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
  background-color: var(--color-secondary);
  font-weight: 400;
  color: var(--color-primary);
  text-align: center;
`;
