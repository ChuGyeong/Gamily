import { styled } from 'styled-components';
const faf0e6 = '#faf0e6';
const fff0db = '#fff0db';
const eed9c4 = '#eed9c4';
const e4d5b7 = '#e4d5b7';
const d9b99b = '#d9b99b';
export const WrapContainer = styled.div`
   position: relative;
   width: 100%;
   background-color: ${faf0e6};
`;
export const MainContainer = styled.div`
   position: relative;
   width: 100%;
`;
export const InnerContainer = styled.div`
   padding: 50px 0;
   height: 100vh;
   width: 1400px;
   margin: auto;
   box-sizing: border-box;
   position: relative;
`;
export const HeaderContainer = styled.header`
   position: fixed;
   left: 50%;
   transform: translateX(-50%);
   top: 0;
   width: 1400px;
   height: 110px;
   z-index: 100;
   .inner {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: -110px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      &.on {
         top: 0;
      }
      h1 {
         position: absolute;
         left: 0;
         top: 50%;
         transform: translateY(-50%);
      }
      .gnb {
         ul {
            display: flex;
            justify-content: center;
            align-items: center;
            li {
               margin-right: 50px;
               &:last-child {
                  margin-right: 0;
               }
            }
         }
      }
      .sub-nav {
         position: absolute;
         right: 0;
         top: 50%;
         transform: translateY(-50%);
      }
   }
`;
export const VisualSection = styled.section`
   width: 100%;
   height: 100vh;
   background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url('./images/visual_5.jpg');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 0 50%;
   overflow: hidden;
   div {
      height: 100vh;
      width: 1400px;
      margin: auto;
      h2 {
         margin-top: 300px;
         font-size: 100px;
         line-height: 1;
         font-weight: 900;
         letter-spacing: -5px;
         span {
            -webkit-text-stroke: 2px #333;
            mix-blend-mode: difference;
         }
      }
   }
`;
export const TextVisualContainer = styled.div`
   * {
      margin: 0;
      padding: 0;
   }

   ::-webkit-scrollbar {
      display: none;
   }

   /* HEADER */

   body {
      overflow-x: visible;
      font-family: 'Impact', Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      background-color: white;
      color: black;
   }

   .upper-container {
      position: fixed;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }

   .upper-container h1 {
      padding: 10px 50px;
      font-size: 20rem;
      line-height: 1;
   }

   .transition {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%;
      overflow: hidden;
   }

   .transition .lower-container {
      opacity: 0;
      height: 50vh;
   }

   .lower-container {
      height: 100vh;
      position: absolute;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-size: 1rem;
      padding: 5rem;
      overflow: hidden;
      flex-wrap: wrap;
   }

   .prut {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .div1,
   .div2,
   .div3 {
      position: absolute;
   }

   .div2 {
      margin: 4rem 0 0 0;
   }

   .div3 {
      margin: 8rem 0 0 0;
   }

   /* MENU */

   .nav-toggler {
      position: fixed;
      z-index: 10;
      top: 30px;
      right: 30px;
      width: 50px;
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
   }

   .line {
      position: absolute;
      display: block;
      width: 100%;
      height: 5px;
      background: black;
      transition: transform 0.3s ease-out, opacity 0.1s ease-out;
   }

   .l1 {
      transform: translateY(-10px);
   }

   .l3 {
      transform: translateY(10px);
   }

   .nav-toggler.active .l1 {
      transform: translateY(0px) rotate(135deg);
   }

   .nav-toggler.active .l2 {
      opacity: 0;
   }

   .nav-toggler.active .l3 {
      transform: translateY(0px) rotate(-135deg);
   }

   nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: blue;
      transform: translateY(-100%);
      transition: transform 0.3s cubic-bezier(0.73, 0.11, 0.67, 0.84);
   }

   nav.active {
      transform: translate(0%);
   }
   nav a {
      color: white;
   }
   .following-content {
      background-color: pink;
      height: 100vh;
   }
`;
