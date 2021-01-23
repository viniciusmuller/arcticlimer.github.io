import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
