import { createGlobalStyle } from "styled-components";
import Flamefont from "./Flame.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Flame';
  src: url(${Flamefont}) format('truetype');
}
* {
  
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;

}

body {
    font-family:sans-serif;
    color:#fff;
}

`;

export default GlobalStyle;
