import { styled, keyframes } from 'styled-components';
const mainColor = '#faf0e6';
const subColor = '#eed9c4';
const pointColor = '#d9b99b';
const fontLogo = "'Bagel Fat One', cursive;";

const fontOpacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const WrapContainer = styled.div`
   position: relative;
   width: 100%;
   /* background-color: ${mainColor}; */
`;
export const MainContainer = styled.div`
   position: relative;
   width: 100%;
   padding: 110px 0 0;
`;

export const InnerContainer = styled.div`
   padding: 50px 0;
   width: 1400px;
   margin: auto;
   box-sizing: border-box;
   position: relative;
`;

// Header
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
         background: #fff;
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

// Footer
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

// GoTopBtn
export const GoTopButton = styled.div`
   position: fixed;
   right: -30px;
   bottom: 30px;
   width: 30px;
   height: 30px;
   background-color: ${mainColor};
   font-size: 22px;
   cursor: pointer;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${pointColor};
   border-radius: 5px;
   &:hover {
      background-color: ${pointColor};
      color: ${mainColor};
   }
   &.on {
      right: 30px;
   }
`;

// InfoBubble
export const InfoBubbleContainer = styled.div`
   position: fixed;
   right: -300px;
   bottom: 70px;
   background: ${mainColor};
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
      border-left-color: ${mainColor};
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

// Visual
export const VisualSection = styled.div`
   width: 100%;
   height: 100vh;
   overflow: hidden;
   transition: 0.4s;
   background: ${mainColor};
   .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.4s;
      opacity: 0.5;
   }
   h2 {
      margin-top: 300px;
      width: 550px;
      font-family: ${fontLogo};
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
         background: ${pointColor};
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
`;

// VisualText
export const VisualTextContainer = styled.section`
   width: 100%;
   height: 100vh;
`;

// Adoption
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
            border-bottom: 2px solid ${pointColor};
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
            color: ${pointColor};
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
            background-color: ${subColor};
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
            border: 1px solid ${subColor};
            &:last-child {
               margin-right: 0;
            }
            &:hover {
               background-color: ${subColor};
            }
         }
      }
   }
`;

// Store
export const StoreContainer = styled.div`
   .time-sale {
      width: 1000px;
      margin: auto;
      background: ${subColor};
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
      h3 {
         font-size: 25px;
         font-weight: 700;
      }
      p {
         vertical-align: middle;
         i {
            margin-left: 10px;
            font-size: 20px;
         }
      }
   }
   .category {
      width: 1000px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: ${mainColor};
      li {
         font-weight: 800;
         padding: 20px 40px;
         box-sizing: border-box;
         transition: 0.4s;
         cursor: pointer;
         &:hover {
            background: ${pointColor};
            color: ${mainColor};
         }
      }
   }
   .product {
      width: 1000px;
      padding: 70px 0;
      margin: 50px auto;
      position: relative;
      .select-area {
         position: absolute;
         top: 0;
         left: 0;
         select {
            appearance: none;
            width: 150px;
            height: 35px;
            padding: 5px 30px 5px 10px;
            border-radius: 4px;
            outline: 0 none;
            &:-ms-expand {
               display: none;
            }
            option {
               background: ${pointColor};
            }
         }
      }
      .product-list {
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         gap: 50px;
         li {
            width: 300px;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            border: 1px solid #eeeeee;
            .img-area {
               width: 100%;
               border-radius: 20px;
               overflow: hidden;
               background: #efefef;
               img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  margin-bottom: -10px;
               }
            }
            .text-area {
               padding: 10px 0;
               height: 70px;
               p {
                  &:nth-child(1) {
                     font-weight: 700;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                  }
                  &:nth-child(2) {
                     padding: 5px 0;
                  }
                  &:nth-child(3) {
                     font-size: 13px;
                     width: 70px;
                     text-align: center;
                     background: ${pointColor};
                     color: ${mainColor};
                  }
               }
            }
            .btn-area {
               button {
                  width: 50%;
                  border: none;
                  padding: 10px 0;
                  transition: 0.3s;
                  cursor: pointer;
                  background: ${mainColor};
                  font-weight: 600;
                  &:hover {
                     background: ${pointColor};
                     color: ${mainColor};
                  }
               }
            }
         }
      }
   }
`;

// ProductDetail
export const ProductContainer = styled.div`
   .mySwiper {
      width: 700px;
      .swiper-slide {
         width: 100%;
         img {
            width: 100%;
         }
      }
   }
   .mySwiper + p {
      font-size: 13px;
      font-weight: 700;
      color: ${pointColor};
   }
   h3 {
      font-weight: 700;
      font-size: 20px;
   }
   .star-area + p {
      border-bottom: 2px solid ${mainColor};
      margin-bottom: 20px;
      padding-bottom: 10px;
   }
   .text-area {
      strong {
         display: block;
         font-weight: 700;
         font-size: 18px;
         margin: 5px 0;
      }
      ul {
         li {
            position: relative;
            margin-left: 30px;
            &::after {
               content: '';
               background-image: url('../images/dog-tracks.png');
               background-size: cover;
               width: 15px;
               height: 15px;
               position: absolute;
               top: 50%;
               transform: translateY(-50%);
               left: -30px;
            }
         }
      }
   }
   .img-area {
      margin-top: 50px;
      text-align: center;
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
      border: 1px solid ${pointColor};
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
            background-color: ${pointColor};
            color: #fff;
         }
      }
   }
`;

// // DogInfoSection
// export const DogInfoContainer = styled.div`
//    padding: 50px 0;
//    [data-tooltip] {
//       position: relative;
//    }
//    [data-tooltip]:before,
//    [data-tooltip]:after {
//       visibility: hidden;
//       opacity: 0;
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%);
//       white-space: nowrap;
//       transition: all 0.2s ease;
//       font-size: 11px;
//       font-family: dotum;
//       letter-spacing: -1px;
//    }
//    [data-tooltip]:before {
//       content: attr(data-tooltip);
//       height: 13px;
//       position: absolute;
//       top: -50px;
//       padding: 5px 10px;
//       border-radius: 5px;
//       color: #fff;
//       background: #025272;
//       box-shadow: 0 3px 8px rgba(165, 165, 165, 0.5);
//    }
//    [data-tooltip]:after {
//       content: '';
//       border-left: 5px solid transparent;
//       top: 2px;
//       border-right: 5px solid transparent;
//       border-top: 5px solid #025272;
//    }
//    [data-tooltip]:not([data-tooltip='']):hover:before {
//       visibility: visible;
//       opacity: 1;
//       top: -30px;
//    }
//    [data-tooltip]:not([data-tooltip='']):hover:after {
//       visibility: visible;
//       opacity: 1;
//       top: -8px;
//    }
// `;
