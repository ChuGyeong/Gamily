import { styled } from 'styled-components';
const faf0e6 = '#faf0e6';
const fff0db = '#fff0db';
const eed9c4 = '#eed9c4';
const e4d5b7 = '#e4d5b7';
const d9b99b = '#d9b99b';
const fontLogo = "'Bagel Fat One', cursive;";
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
   overflow: hidden;
   transition: 0.4s;
   background-color: ${faf0e6};
   .bg {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0 50%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
         url(${props => props.bgimg});
      opacity: ${props => (props.bgimg ? 1 : 0.2)};
      transition: opacity 0.4s;
      &.on {
         opacity: 1;
      }
      &.off {
         opacity: 0.2;
      }
   }
   .text-area {
      height: 100vh;
      width: 1400px;
      margin: auto;
      h2 {
         width: 550px;
         font-family: ${fontLogo};
         margin-top: 300px;
         font-size: 120px;
         line-height: 1;
         letter-spacing: -5px;
         -webkit-text-stroke: 3px rgba(255, 255, 255, 0.5);
         position: relative;
         z-index: 50;
         span {
            mix-blend-mode: none;
            font-weight: 100;
            font-size: 120px;
            color: #d9b99b;
            transition: 0.4s;
            display: inline-block;
            cursor: pointer;
            opacity: 0.5;
         }
         .mySwiper {
            display: inline-block;
            height: 120px;
            width: 220px;
            display: flex;
            overflow: hidden;
            .swiper-slide {
               display: flex;
               align-items: center;
               justify-content: center;
               padding-bottom: 5px;
               box-sizing: border-box;
            }
         }
         &:hover span {
            opacity: 1;
         }
         &::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 5px;
            width: 50px;
            height: 50px;
            background: ${d9b99b};
            background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
               url('./images/dog-tracks.png');
            background-size: 40px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            z-index: -10;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.5);
         }
      }
   }
   .img-area {
      position: absolute;
      top: 25%;
      left: 200px;
      width: 100px;
      height: 130px;
      border-radius: 50px 50px 0 0;
      opacity: 0.5;
      overflow: hidden;
      img {
         width: 100px;
         height: 130px;
         object-fit: cover;
         object-position: 50% 50%;
      }
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
export const VisualKnowContainer = styled.div`
   padding: 50px 0;
   [data-tooltip] {
      position: relative;
   }
   [data-tooltip]:before,
   [data-tooltip]:after {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      transition: all 0.2s ease;
      font-size: 11px;
      font-family: dotum;
      letter-spacing: -1px;
   }
   [data-tooltip]:before {
      content: attr(data-tooltip);
      height: 13px;
      position: absolute;
      top: -50px;
      padding: 5px 10px;
      border-radius: 5px;
      color: #fff;
      background: #025272;
      box-shadow: 0 3px 8px rgba(165, 165, 165, 0.5);
   }
   [data-tooltip]:after {
      content: '';
      border-left: 5px solid transparent;
      top: 2px;
      border-right: 5px solid transparent;
      border-top: 5px solid #025272;
   }
   [data-tooltip]:not([data-tooltip='']):hover:before {
      visibility: visible;
      opacity: 1;
      top: -30px;
   }
   [data-tooltip]:not([data-tooltip='']):hover:after {
      visibility: visible;
      opacity: 1;
      top: -8px;
   }
`;

export const LoadingContainer = styled.div`
   padding: 50px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   strong {
      display: block;
      font-size: 50px;
      span {
         position: relative;
         &:nth-child(1) {
            animation: loadingDotAni infinite ease-in-out 1.5s;
         }
         &:nth-child(2) {
            animation: loadingDotAni infinite ease-in-out 1.5s 0.3s;
         }
         &:nth-child(3) {
            animation: loadingDotAni infinite ease-in-out 1.5s 0.6s;
         }
      }
   }
   i {
      font-size: 100px;
   }
   @keyframes loadingDotAni {
      0% {
         bottom: 0;
      }
      50% {
         bottom: 10px;
      }
      100% {
         bottom: 0;
      }
   }
`;
export const PagingContainer = styled.div`
   display: flex;
   justify-content: center;
   button,
   li {
      cursor: pointer;
      width: 30px;
      height: 30px;
      padding: 0;
      border-radius: 5px;
      border: 1px solid ${d9b99b};
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
   }
   button {
      &:first-child i:first-child,
      &:last-child i:first-child {
         margin-right: -5px;
      }
   }
   ul {
      display: flex;
      margin: 0 10px;
      li {
         &.active {
            background-color: ${d9b99b};
            color: #fff;
         }
      }
   }
`;
