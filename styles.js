import styled, { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default createGlobalStyle`
  :root {
    /* Color styles */
    --color-white: #fff;
    --color-grey: #666;
    --color-light-grey: #cdc8bf;
    --color-night: #333;
    --color-orange: #fea500;
    --color-gradient: linear-gradient(to bottom right, #fec600, #fe9900);

    /* Font styles */
    --font-family: ${inter.style.fontFamily};
    --font-body: 300 1rem/1.5 var(--font-family);
    --font-caption: 500 1rem/1.25 var(--font-family);
    --font-form-heading: 500 1.25rem/1.25 var(--font-family);
    --font-form-label: 400 1.125rem/1.5 var(--font-family);
    --font-button: 500 1.125rem/1.25 var(--font-family);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: var(--color-night);
  }

  body {
    background: var(--color-white);
    font: var(--font-body);
    color: var(--color-night);
  }
`;

export const Card = styled.div`
  position: relative;
  top: -36px;
  padding: 45px 24px 14px;
  background: var(--color-white);
  border-radius: 40px;
  z-index: 1;
`;

export const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
