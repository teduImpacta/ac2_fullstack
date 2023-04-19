import { createGlobalStyle } from "styled-components";
import RegularFont from "../assets/fonts/Lato-Regular.ttf";
import BoldFont from "../assets/fonts/Lato-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
    body {
  background-color: #eef2f6;
  font-family: Lato;
  font-size: 16px;
}

* {
  outline: none;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: Lato;
  src: url(${RegularFont});
  font-weight: 400;
  font-display: block;
}

@font-face {
  font-family: Lato;
  src: url(${BoldFont});
  font-weight: 700;
  font-display: block;
}
`;
