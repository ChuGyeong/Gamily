import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import NanumSquareNeo from '../assets/fonts/NanumSquareNeo-Variable.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  @font-face {
    font-family: 'NanumSquare';
    src: url(${NanumSquareNeo}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-size: 14px;
    line-height: 1.6;
    color:#555;
    font-family: 'NanumSquare', 'Noto Sans KR', sans-serif;
  }
  a {
    text-decoration: none;
    color:#555; 
  }
  * {
    font-family: 'NanumSquare', 'Noto Sans KR', sans-serif;
  }
  li { list-style:none }
`;
export default GlobalStyle;
