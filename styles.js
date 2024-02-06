import { createGlobalStyle } from "styled-components";
import { Inter } from 'next/font/google'
 
const inter = Inter(
  { 
    subsets: [
      'latin'
    ] 
  }
)

export default createGlobalStyle`
  :root {
    /* Font styles */
    --font-family: ${inter.style.fontFamily};
    --font-body: normal 400 1rem/1.25 var(--font-family);
    --font-caption: normal 500 1rem/1.25 var(--font-family);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font: var(--font-body);
  }
`;
