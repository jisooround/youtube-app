import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset}

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    color: #0f0f0f
  }


@media (prefers-color-scheme: dark) {
  body {
    background-color: #0F0F0F;
    color: #fff
  }

  svg {
    color: #fff
  }

}

`;

export default GlobalStyles;
