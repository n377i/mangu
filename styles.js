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
    --font-heading-1: 600 1.5rem/1.33 var(--font-family);
    --font-heading-2: 500 1.25rem/1.25 var(--font-family);
    --font-caption: 500 0.875rem/1.33 var(--font-family);
    --font-form-label: 400 1.125rem/1.5 var(--font-family);
    --font-button: 500 1.125rem/1.25 var(--font-family);

    /* Effects */
    --shadow-icon: 0 4px 0 0 rgba(0, 0, 0, 0.5);
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
  padding: 45px 24px 14px;
  background: var(--color-white);
  position: relative;
  top: -36px;
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
