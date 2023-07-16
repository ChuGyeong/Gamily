import { styled, keyframes } from 'styled-components';
const mainColor = '#ffc303';
const subColor = '#1c3761';
const pointColor = '#e84200';
const fontBagelFatOne = "'Bagel Fat One', cursive;";
const fontSmooch = " 'Smooch', cursive;";
const fontVT323 = " 'VT323', monospace;";

export const ParticleButton = styled.button`
   position: relative;
   display: inline-block;
   background-color: ${mainColor};
   border: none;
   outline: none;
   overflow: hidden;
   cursor: pointer;
   transition: all 0.3s ease-out;
   &:hover {
      background-color: ${mainColor};
   }
   &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #ffffff;
      opacity: 0.8;
      transition: all 0.5s ease-out;
   }
   &:hover::before {
      transform: translate(-50%, -50%) scale(20);
      opacity: 0;
   }
`;

export const WaveEffect = styled.div`
   .wave {
      opacity: 0.4;
      position: absolute;
      top: ${props => props.top};
      left: ${props => props.left};
      border: 2px solid ${pointColor};
      width: 300px;
      height: 300px;
      -webkit-transform-origin: 50% 48%;
      transform-origin: 50% 48%;
      -webkit-animation: drift 3000ms infinite linear;
      animation: drift 3000ms infinite linear;
      border-radius: 43%;
   }
   .wave.three {
      -webkit-animation: drift 5000ms infinite linear;
      animation: drift 5000ms infinite linear;
   }
   .wave.two {
      -webkit-animation: drift 7000ms infinite linear;
      animation: drift 7000ms infinite linear;
      opacity: 0.1;
      border: 3px solid ${mainColor};
   }
   .wave.four {
      border: 3px solid ${subColor};
      -webkit-animation: drift 4000ms infinite linear;
      animation: drift 4000ms infinite linear;
   }
   .box:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #ee88aa, rgba(221, 238, 255, 0) 80%, rgba(255, 255, 255, 0.5));
      z-index: 11;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
   }

   @-webkit-keyframes drift {
      from {
         -webkit-transform: rotate(0deg) scale(0, 0);
         transform: rotate(0deg) scale(0, 0);
         opacity: 1;
      }
      to {
         -webkit-transform: rotate(360deg) scale(2, 2);
         transform: rotate(360deg) scale(2, 2);
         opacity: 0;
      }
   }

   @keyframes drift {
      from {
         -webkit-transform: rotate(0deg) scale(0, 0);
         transform: rotate(0deg) scale(0, 0);
         opacity: 1;
      }
      to {
         -webkit-transform: rotate(360deg) scale(2, 2);
         transform: rotate(360deg) scale(2, 2);
         opacity: 0;
      }
   }
`;

export const ToggleSwitch = styled.div`
   text-align: center;
   margin: 50px 0;
   .switch {
      font-size: 1rem;
      position: relative;
      display: inline-block;
      width: 4em;
      height: 2em;
      input {
         opacity: 0;
         width: 0;
         height: 0;
      }
      .slider {
         position: absolute;
         cursor: pointer;
         inset: 0;
         background-color: #eee;
         transition: 0.4s;
         border-radius: 0.5em;
         box-shadow: 0 0.2em #dfd9d9;
      }
      .slider:before {
         position: absolute;
         content: '';
         height: 1.5em;
         width: 1.4em;
         border-radius: 0.3em;
         left: 0.3em;
         bottom: 0.7em;
         background-color: ${subColor};
         transition: 0.4s;
         box-shadow: 0 0.4em #bcb4b4;
      }
      .slider:hover::before {
         box-shadow: 0 0.2em #bcb4b4;
         bottom: 0.5em;
      }
      input:checked + .slider:before {
         transform: translateX(2em);
         background: ${mainColor};
      }
   }
`;

export const WrapContainer = styled.div`
   position: relative;
   width: 100%;
`;
export const MainContainer = styled.div`
   position: relative;
   width: 100%;
   padding: 110px 0;
   overflow: hidden;
   box-sizing: border-box;
   min-height: calc(100vh - 350px);
`;

export const InnerContainer = styled.div`
   /* padding: 50px 0; */
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
   width: 100%;
   height: 110px;
   z-index: 100;

   .inner {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: -110px;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      background-color: ${subColor};
      .content-inner {
         width: 1400px;
         position: relative;
      }
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
         .main-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            & > li {
               margin-right: 50px;
               position: relative;
               &:focus,
               &:hover {
                  color: #fff;
               }

               &:focus::after,
               &:hover::after {
                  width: 100%;
                  left: 0%;
               }

               &::after {
                  content: '';
                  pointer-events: none;
                  bottom: -2px;
                  left: 50%;
                  position: absolute;
                  width: 0%;
                  height: 2px;
                  background-color: #fff;
                  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
                  transition-duration: 400ms;
                  transition-property: width, left;
               }
               &.on {
                  & > a {
                     color: ${mainColor};
                  }
               }
               a {
                  color: #fff;
               }
               &:last-child {
                  margin-right: 0;
               }
               .sub-menu {
                  position: absolute;
                  display: none;
                  padding: 5px 0;
                  &.active {
                     display: flex;
                  }
                  & > li {
                     height: 30px;
                     font-size: 12px;
                     margin-right: 20px;
                     &.on {
                        a {
                           color: ${mainColor};
                        }
                     }
                  }
               }
            }
         }
      }
      .sub-nav {
         position: absolute;
         right: 0;
         top: 50%;
         transform: translateY(-50%);
         a {
            color: #fff;
         }
      }
   }
`;

// Footer
export const FooterContainer = styled.footer`
   background: ${subColor};
   color: #fff;
   padding: 30px 0;
   h2 {
      margin-bottom: 10px;
   }
   a {
      color: #fff;
   }
   strong,
   label {
      display: block;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 2px solid #090909;
      padding-bottom: 5px;
      margin-bottom: 10px;
   }
   span {
      display: block;
   }
   .box-continer {
      justify-content: space-between;
      display: flex;
   }
   .link-box {
      a {
         margin-right: 10px;
         &:last-child {
            margin-right: 0;
         }
         i {
            font-size: 40px;
         }
      }
   }
   .newsletter-box {
      text-align: right;
      p {
         margin-bottom: 10px;
         font-size: 14px;
      }
      button {
         background: ${mainColor};
         border: none;
         padding: 10px 20px;
         cursor: pointer;
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
   z-index: 10;
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
   border: 2px solid ${subColor};
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
   &::before {
      content: '';
      position: absolute;
      right: -3px;
      bottom: 8px;
      width: 0;
      height: 0;
      border: 25px solid transparent;
      border-left-color: ${subColor};
      border-right: 0;
      border-bottom: 0;
      margin-top: -8px;
      margin-right: -22px;
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
      background: ${pointColor};
      color: #fff;
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
   .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.4s;
      /* background-image: url('./images/visual_1.jpg'); */
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      filter: grayscale(99%);
   }
   h2 {
      margin-top: 300px;
      width: 550px;
      font-family: ${fontBagelFatOne};
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
         color: ${pointColor};
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
   &:hover .bg {
      filter: grayscale(0%);
   }
`;

// VisualText
export const VisualTextContainer = styled.section`
   width: 100%;
   height: 100vh;
`;

// Adoption
export const AdoptionContainer = styled.div`
   h2 {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 20px;
   }
   form {
      width: 50%;
      margin-bottom: 50px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .search-box {
         width: 100%;
         position: relative;
         margin-bottom: 20px;
         input[type='text'] {
            width: 100%;
            height: 70px;
            text-indent: 20px;
            box-sizing: border-box;
            background-color: transparent;
            outline: 2px solid #febf00;
            outline-offset: 3px;
            border-radius: 10px;
            padding: 10px 1rem;
            transition: 0.4s;
            /* border: none; */
            &:focus {
               outline-offset: 10px;
               background-color: ${subColor};
               color: #fff;
            }
            &:focus + button {
               color: ${mainColor};
            }
         }
         button {
            font-size: 30px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            color: ${subColor};
            cursor: pointer;
         }
         .suggest-box {
            width: 100%;
            position: absolute;
            z-index: 110;
            border: 1px solid ${subColor};
            border-radius: 5px;
            overflow: hidden;
            li {
               width: 100%;
               background-color: #fff;
               transition: 0.2s;
               cursor: pointer;
               &:hover,
               &.focused {
                  background-color: ${subColor};
                  color: #fff;
               }
            }
         }
      }
      .filter-box {
         position: relative;
         width: 100%;
         margin-bottom: 30px;
         .toggle-btn {
            width: 100px;
            border-radius: 10px 10px 0 0;
            background-color: ${mainColor};
            cursor: pointer;
            height: 30px;
            z-index: 100;
            border: 2px solid ${subColor};
         }
         .filter-content {
            z-index: 100;
            position: absolute;
            top: 28px;
            left: 0;
            background-color: ${mainColor};
            box-sizing: border-box;
            border-radius: 0 0 20px 20px;
            overflow: hidden;
            height: 0;
            transition: 0.2s;
            &.on {
               height: 360px;
               padding: 20px;
               border: 2px solid ${subColor};
            }
            p {
               strong {
                  display: block;
                  width: 70px;
                  font-weight: 700;
                  margin: 5px 0;
               }
               label {
                  display: inline-block;
                  margin-top: 2px;
                  margin-right: 5px;
                  input[type='number'] {
                     padding: 5px;
                     margin-right: 5px;
                     border: 1px solid #000;
                  }
               }
            }
            input {
               accent-color: ${pointColor};
            }
            button {
               margin-top: 30px;
               background: ${subColor};
               padding: 10px 20px;
               color: #fff;
               border-radius: 10px;
            }
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
      padding: 20px;
      box-sizing: border-box;
      overflow: hidden;
      border: 1px solid #efefef;
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
            border-radius: 10px;
            background-color: #efefef;
            margin-right: 15px;
            margin-bottom: 10px;
         }
      }
      .btn-box {
         display: flex;
         justify-content: center;
         align-items: center;
         button {
            width: 50%;
            height: 30px;
            &:first-child {
               border-radius: 30px 0 0 30px;
            }
            &:last-child {
               background: ${subColor};
               border-radius: 0 30px 30px 0;
               color: #fff;
            }
         }
      }
   }
   .info-box {
      font-size: 50px;
      padding: 100px 50px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

// Store
export const StoreContainer = styled.div`
   .time-sale {
      background: ${mainColor};
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
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background: ${subColor};
      color: #fff;
      li {
         width: 20%;
         padding: 20px 0;
         text-align: center;
         box-sizing: border-box;
         transition: 0.4s;
         cursor: pointer;
         &:hover {
            background: ${mainColor};
            color: ${subColor};
         }
      }
   }
   .product {
      width: 100%;
      margin-top: 50px;
      padding-top: 70px;
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
               background: ${mainColor};
            }
         }
      }
      .product-list {
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         gap: 50px;
         li {
            width: 400px;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 10px;
            border: 1px solid #eeeeee;
            position: relative;
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
                     color: #fff;
                     animation: fontOpacity infinite ease-in-out 1.5s;
                     position: absolute;
                     top: 20px;
                     right: 20px;
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
                     background: ${subColor};
                     color: #fff;
                  }
               }
            }
         }
      }
   }
   @keyframes fontOpacity {
      0% {
         color: ${pointColor};
      }
      50% {
         color: #fff;
      }
      100% {
         color: ${pointColor};
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

// Loading
export const LoadingContainer = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   background-color: #fff;
   z-index: 1000;
   width: 100vw;
   height: 100vh;
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
            animation: loadingDotAni infinite ease-in-out 1.5s 0.15s;
         }
         &:nth-child(3) {
            animation: loadingDotAni infinite ease-in-out 1.5s 0.3s;
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

// Paging
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
      border: 1px solid #efefef;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      margin: 2px;
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

// NotFound
export const NotFoundContainer = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   span {
      font-weight: 900;
      font-size: 80px;
   }
`;

// Knowledge
export const KnowledgeContainer = styled.div`
   .text-area {
      border: 1px solid #efefef;
      padding: 20px;
      background: #fff;
      position: relative;
      margin-top: 230px;
      background: #fff;
      z-index: 100;
      &::after {
         content: '';
         width: 300px;
         height: 210px;
         position: absolute;
         top: -200px;
         left: 0;
         background-image: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
            url('./images/bulldog.png');
         background-size: cover;
         background-repeat: no-repeat;
         background-position: 0 40%;
         transform: rotate(1deg);
      }
      div {
         padding: 50px;
         box-sizing: border-box;
         border-radius: 30px;
         margin-bottom: 20px;
         &:last-child {
            margin-bottom: 0;
         }
         strong {
            font-size: 25px;
            font-weight: 700;
         }
         p {
            margin-top: 20px;
         }
         &:nth-child(1n) {
            background: #efefef;
            background: ${subColor};
            color: #efefef;
         }
         &:nth-child(2n) {
            background: ${mainColor};
            color: #555;
         }
      }
   }
`;
// Quiz
export const QuizContainer = styled.div`
   h3 {
      font-size: 120px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 30px;
      font-family: 'Impact';
      span {
         &:first-child,
         &:last-child {
            color: ${pointColor};
         }
         &:nth-child(3n) {
            color: ${mainColor};
         }
         &:nth-child(4n) {
            color: ${subColor};
         }
         &:nth-child(5n) {
            color: ${pointColor};
         }
      }
   }
   ul {
      margin: 100px 0;
      li {
         margin-left: 30px;
         position: relative;
         margin-bottom: 10px;
         &::after {
            content: '';
            background-image: url('./images/dog-tracks.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -30px;
         }
      }
   }
   .contents {
      display: flex;
      box-sizing: border-box;
      div {
         width: 50%;
         text-align: center;
         color: #fff;
         padding: 50px 0;
         p {
            margin-bottom: 30px;
         }
         &:first-child {
            background: ${pointColor};
         }
         &:last-child {
            background: ${subColor};
         }
         button {
            font-size: 15px;
            background-color: ${mainColor};
            border: 1px solid #f39c12;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0px 6px 0px #f39c12;
            transition: all 0.1s;
            cursor: pointer;
            &:active {
               box-shadow: 0px 2px 0px #d35400;
               position: relative;
               top: 2px;
            }
         }
      }
   }
`;

export const QuestionContainer = styled.div`
   h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 50px;
   }
   ul {
      li {
         margin-bottom: 20px;
         p {
            span {
            }
            strong {
               margin: 0 5px;
            }
         }
         label {
            input[type='radio'] {
               margin-right: 5px;
            }
            span {
               margin-right: 15px;
            }
         }
      }
   }
   button {
      padding: 10px 30px;
   }
`;
export const ToggleForm = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   .singup {
      color: ${props => props.fontcolor};
      text-transform: uppercase;
      letter-spacing: 2px;
      display: block;
      font-weight: bold;
      font-size: x-large;
      margin-top: 1.5em;
   }

   .card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      flex-direction: column;
      gap: 35px;
      border-radius: 15px;
      background: ${props => props.bgcolor};
      box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
      border-radius: 8px;
   }

   .inputBox,
   .inputBox1 {
      position: relative;
      width: 250px;
   }

   .inputBox input,
   .inputBox1 input {
      width: 100%;
      padding: 10px;
      outline: none;
      border: none;
      color: ${props => props.fontcolor};
      font-size: 1em;
      background: transparent;
      border-left: 2px solid ${props => props.fontcolor};
      border-bottom: 2px solid ${props => props.fontcolor};
      transition: 0.1s;
      border-bottom-left-radius: 8px;
   }

   .inputBox span,
   .inputBox1 span {
      margin-top: 5px;
      position: absolute;
      left: 0;
      transform: translateY(-45px);
      margin-left: 10px;
      padding: 10px;
      pointer-events: none;
      font-size: 11px;
      text-transform: uppercase;
      transition: 0.5s;
      letter-spacing: 3px;
      border-radius: 8px;
      color: ${props => props.fontcolor};
   }

   .inputBox input:valid ~ span,
   .inputBox input:focus ~ span {
      transform: translateX(150px) translateY(-60px);
      font-size: 0.8em;
      padding: 5px 10px;
      background: ${props => props.fontcolor};
      color: ${props => props.pointcolor};
      font-weight: 700;
   }

   .inputBox1 input:valid ~ span,
   .inputBox1 input:focus ~ span {
      transform: translateX(189px) translateY(-60px);
      font-size: 0.8em;
      padding: 5px 10px;
      background: ${props => props.fontcolor};
      color: ${props => props.pointcolor};
      font-weight: 700;
      border: 2px;
   }

   .inputBox input:valid,
   .inputBox input:focus,
   .inputBox1 input:valid,
   .inputBox1 input:focus {
      border: 2px solid ${props => props.fontcolor};
      border-radius: 8px;
   }

   .enter {
      height: 45px;
      width: 100px;
      border-radius: 5px;
      border: 2px solid ${props => props.fontcolor};
      color: ${props => props.fontcolor};
      cursor: pointer;
      background-color: transparent;
      transition: 0.5s;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 2px;
      margin-bottom: 3em;
      margin-top: 30px;
   }

   .enter:hover {
      background-color: ${props => props.fontcolor};
      color: ${props => props.pointcolor};
   }
`;
export const ToggleFormContainer = styled.div`
   position: relative;
   width: 400px;
   height: 400px;
   margin: auto;
   transition: 0.7s;
   &.login {
      transform: rotateY(0);
   }
   &.signUp {
      transform: rotateY(360deg);
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
export const AdoptionDetailContainer = styled.div`
   .content-box {
      display: flex;
      .img-box {
         width: 50%;
         img {
            width: 100%;
         }
      }
      .text-box {
         width: 50%;
         span {
            display: block;
         }
      }
   }
   .btn-box {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;
