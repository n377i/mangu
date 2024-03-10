import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0 1rem 1rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const Caption = styled.figcaption`
  font: var(--font-caption);
  text-align: center;
  margin-top: 0.25rem;
`;