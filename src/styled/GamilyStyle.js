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
export const FooterContainer = styled.footer`
   strong {
      display: block;
      font-weight: 600;
      font-size: 18px;
   }
   span {
      display: block;
   }
   .box-continer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info-box {
      }
      .link-box {
         ul {
            display: flex;
            li {
               margin-right: 30px;
               &:last-child {
                  margin-right: 0;
               }
            }
         }
         label {
            font-weight: 600;
            font-size: 18px;
            margin-right: 30px;
         }
      }
   }
`;
export const GoTopButton = styled.div`
   position: fixed;
   right: -30px;
   bottom: 30px;
   width: 30px;
   height: 30px;
   background-color: ${faf0e6};
   font-size: 22px;
   cursor: pointer;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${d9b99b};
   border-radius: 5px;
   &:hover {
      background-color: ${d9b99b};
      color: ${faf0e6};
   }
   &.on {
      right: 30px;
   }
`;
export const InfoBubbleContainer = styled.div`
   position: fixed;
   right: -300px;
   bottom: 70px;
   background: ${faf0e6};
   border-radius: 0.4em;
   width: 280px;
   height: 80px;
   padding: 20px;
   box-sizing: border-box;
   transition: 0.3s;

   &.on {
      animation: bubble 1s 1;
      right: 30px;
   }
   &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 10px;
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-left-color: ${faf0e6};
      border-right: 0;
      border-bottom: 0;
      margin-top: -10px;
      margin-right: -20px;
   }
   p {
      margin-top: 15px;
      font-weight: 600;
   }
   span {
      position: absolute;
      right: 35px;
      top: 10px;
      font-size: 10px;
      cursor: pointer;
   }
   button {
      position: absolute;
      right: 10px;
      top: 10px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: none;
   }
   @keyframes bubble {
      0% {
         right: -300px;
      }
      100% {
         right: 30px;
      }
   }
`;
export const AdoptionContainer = styled.div`
   padding-top: 110px;
   h2 {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 20px;
   }
   form {
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      .search-box {
         width: 50%;
         position: relative;
         input[type='text'] {
            width: 100%;
            height: 70px;
            text-indent: 20px;
            font-size: 20px;
            box-sizing: border-box;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid ${d9b99b};
            &:focus {
               outline: none;
            }
         }
         button {
            font-size: 30px;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            color: ${d9b99b};
            cursor: pointer;
         }
      }
   }
   .masonry-grid {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
   }
   .masonry-grid_column {
      /* width: calc(100% / 4 - 30px); */
      display: flex; // flexbox를 적용
      flex-direction: column; // 방향을 column으로 설정
      box-sizing: border-box;
      background-clip: padding-box;
      /* margin-right: 30px; */
      padding-right: 30px;
      &:last-child {
         padding-right: 0;
      }
   }
   .masonry-item {
      width: 100%;
      background-color: #fff;
      border-radius: 20px;
      margin-bottom: 30px;
      // default 비율로 설정 (1행에 4열)
      padding: 10px;
      box-sizing: border-box;
      overflow: hidden;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      img {
         display: block;
         width: 100%;
         border-radius: 15px;
         margin-bottom: 20px;
      }
      .text-box {
         display: flex;
         flex-wrap: wrap;
         /* justify-content: space-between; */
         margin-bottom: 20px;
         span {
            font-size: 14px;
            display: block;
            padding: 3px 10px;
            border-radius: 30px;
            background-color: ${eed9c4};
            margin-right: 15px;
            margin-bottom: 10px;
         }
      }
      .btn-box {
         display: flex;
         justify-content: center;
         align-items: center;
         button {
            width: 49%;
            height: 40px;
            border-radius: 20px;
            border: none;
            background-color: transparent;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 2%;
            border: 1px solid ${eed9c4};
            &:last-child {
               margin-right: 0;
            }
            &:hover {
               background-color: ${eed9c4};
            }
         }
      }
   }
`;
