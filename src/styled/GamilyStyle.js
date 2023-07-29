import { styled, keyframes } from 'styled-components';
const mainColor = '#ffc303';
const subColor = '#1c3761';
const pointColor = '#e84200';
const fontBagelFatOne = "'Bagel Fat One', cursive;";
const fontImpact = "'Impact'";
const fontVT323 = " 'VT323', monospace;";

export const ParticleButton = styled.button`
   position: relative;
   display: inline-block;
   background-color: ${mainColor};
   border: none;
   outline: none;
   overflow: hidden;
   cursor: pointer;
   transition: all 0.4s ease-out;
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
   padding-top: 110px;
   padding-bottom: 110px;
   overflow: hidden;
   box-sizing: border-box;
   min-height: calc(100vh - 350px);
   transition: 0.4s;
   &.on {
      padding-top: 220px;
   }
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
   z-index: 200;
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
   .box-container {
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
   z-index: 300;
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

// VisualText
export const VisualTextContainer = styled.section`
   width: 100%;
   .text-area {
      width: 100%;
      p {
         text-align: center;
         font-size: 30px;
         span {
            opacity: 0;
            display: block;
            transition: 1s;
         }
         strong {
            font-size: 400px;
            opacity: 1;
            font-weight: 700;
            color: ${subColor};
            font-family: ${fontImpact};
            transition: 1s;
         }
      }
      &.on {
         p {
            span {
               opacity: 1;
            }
            strong {
               font-size: 50px;
            }
         }
      }
   }
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
         /* gap: 50px; */
         li {
            width: calc(100% / 3 - 50px);
            margin: 25px;
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
                     padding-top: 5px;
                  }
                  &.out-of-stock {
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
   .tit-area {
      position: relative;
      h3 {
         font-weight: 700;
         font-size: 20px;
      }
      .price {
         width: 70px;
         animation: fontOpacity infinite ease-in-out 1.5s;
      }
      .btn-area {
         position: absolute;
         bottom: 0;
         /* transform: translateY(-50%); */
         right: 0;
         /* display: flex;
         flex-direction: column; */
         button {
            padding: 10px 20px;
            &:last-child {
               background: ${subColor};
               color: #efefef;
            }
         }
      }
   }
   .text-area {
      border-top: 2px solid ${mainColor};
      margin-top: 20px;
      padding-top: 10px;
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
   @keyframes fontOpacity {
      0% {
         color: ${subColor};
      }
      50% {
         color: #e9e9e9;
      }
      100% {
         color: ${subColor};
      }
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
      font-family: ${fontImpact};
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

// Question
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
            margin-right: 15px;
            input[type='radio'] {
               margin-right: 5px;
            }
         }
      }
   }
   button {
      padding: 10px 30px;
   }
`;
// AnswerSheet
export const AnswerSheetContainer = styled.div`
   h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 50px;
   }
   ul {
      li {
         margin-bottom: 20px;
         position: relative;
         p {
            span {
               &.answer-icon {
                  position: absolute;
                  top: -5px;
                  left: -15px;
                  i {
                     font-size: 30px;
                  }
               }
            }
            strong {
               margin: 0 5px;
            }
         }
         label {
            margin-right: 15px;
            input[type='radio'] {
               margin-right: 5px;
            }
         }
         .commentary-box {
            margin-top: 10px;
            padding: 10px;
            box-sizing: border-box;
            background-color: #efefef;
         }
      }
   }
   button {
      padding: 10px 30px;
   }
`;

// Login
export const ToggleForm = styled.form`
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

// Login
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

// MyPage
export const MyPageContainer = styled.div`
   > div {
      display: flex;
      .profile {
         width: 300px;
         border-right: 2px solid #efefef;
         padding: 20px;
         text-align: center;
         img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
         }
         p {
            margin: 10px 0;
            font-size: 20px;
            text-align: center;
            span {
               font-weight: 700;
            }
         }
         .btn-area {
            text-align: center;
            button {
               padding: 10px 0;
               width: 120px;
               &:first-child {
                  border-right: 1px solid #fff;
               }
               &:last-child {
                  border-left: 1px solid #fff;
               }
               &:hover {
                  background: ${subColor};
                  color: #fff;
               }
            }
         }
      }
      .container {
         > div {
            position: relative;
            padding: 20px;
            box-sizing: border-box;
            width: 1041px;
         }
         /* 리스트 공통 */
         h3 {
            margin-bottom: 20px;
            font-weight: 700;
            font-size: 25px;
            padding-bottom: 10px;
         }
         .not-list {
            width: 1000px;
            height: 186.19px;
            line-height: 186.19px;
            text-align: center;
            border: 1px solid #efefef;
         }
         p {
            width: 100%;
            padding: 3px 5px;
            box-sizing: border-box;
            font-size: 13px;
            &.name {
               text-overflow: ellipsis;
               overflow: hidden;
               white-space: nowrap;
               text-align: center;
               color: #efefef;
               cursor: pointer;
               background: ${subColor};
            }
         }
         ul {
            width: 1000px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            gap: 10px;
         }
      }
   }
`;

export const MyPageContent = styled.div`
   .btn-area {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      button {
         margin-right: 10px;
         cursor: pointer;
         padding: 5px 10px;
         border-radius: 5px;
         &:hover {
            background: ${pointColor};
            color: #fff;
         }
      }
   }
   ul {
      li {
         padding-top: 30px;
         width: calc(100% / 6 - 10px);
         border: 1px solid #efefef;
         position: relative;
         padding: 30px 10px 10px;
         box-sizing: border-box;
         .close {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 20px;
            height: 30px;
            border: none;
            cursor: pointer;
            background: transparent;
            transition: 0.4s;
            &:hover {
               transform: rotate(180deg);
            }
         }
         input[type='checkbox'] {
            position: absolute;
            top: 0px;
            left: 0px;
         }
         img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            object-position: 50% 50%;
            cursor: pointer;
         }
         .app-form-btn {
            width: 100%;
            border: none;
            cursor: pointer;
            padding: 5px 0;
         }
         .quantity-up-down {
            width: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
            vertical-align: middle;
            button {
               width: 25%;
               border: none;
               cursor: pointer;
            }
            span {
               display: inline-block;
               width: 50%;
               background: ${mainColor};
            }
         }
      }
   }
`;
export const UserBadgeContent = styled.div`
   ul {
      li {
         width: calc(100% / 7 - 10px);
         border: 1px solid #efefef;
         position: relative;
         padding: 30px 10px 10px;
         box-sizing: border-box;
         img {
            width: 100%;
            height: 110px;
            object-fit: cover;
         }
      }
   }
`;
export const UserQnAContent = styled.div`
   ul {
      flex-direction: column;
      li {
         position: relative;
         border-bottom: 1px solid #efefef;
         strong {
            display: block;
            font-size: 18px;
         }
         .btn-area {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            button {
               border: none;
               padding: 5px 10px;
               cursor: pointer;
               background: #f0f0f0;
               margin-left: 10px;
               border-radius: 5px;
            }
         }
      }
   }
`;

// Notice
export const NoticeContainer = styled.div`
   h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 50px;
   }
   table {
      width: 100%;
      text-align: center;
      .wid1 {
         width: 10%;
      }
      .wid2 {
      }
      .wid3 {
         width: 20%;
      }
      .wid4 {
         width: 10%;
      }
      tr {
         th {
            padding: 10px 0;
            background: ${subColor};
            color: #fff;
            box-sizing: border-box;
            border-bottom: 2px solid #fff;
         }
         td {
            box-sizing: border-box;
            padding: 10px 0;
            background: ${mainColor};
            border-bottom: 1px solid #fff;
            cursor: pointer;
            &:nth-child(2) {
               text-align: left;
            }
         }
      }
   }
   .btn-area {
      margin-top: 50px;
      text-align: right;
      button {
         font-size: 12px;
         background-color: ${pointColor};
         color: #fff;
         border: 1px solid #f39c12;
         border-radius: 5px;
         padding: 10px 20px;
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
`;
export const NoticeDetailContainer = styled.div`
   .notice-view {
      width: 100%;
      .tit-area {
         text-align: center;
         margin-bottom: 30px;
         line-height: 1.4;
         span {
            &:first-child {
               font-weight: 700;
            }
            &:last-child {
               font-size: 18px;
            }
         }
         p {
            font-size: 50px;
            font-weight: 700;
         }
      }
      .text-area {
         border: 1px solid #efefef;
         padding: 20px;
         box-sizing: border-box;
      }
   }

   .btn-area {
      text-align: center;
      margin-top: 20px;
      button {
         padding: 10px 30px;
         box-sizing: border-box;
         &:nth-child(1) {
         }
         &:nth-child(2) {
            background: ${subColor};
            color: #fff;
         }
         &:nth-child(3) {
         }
      }
   }
`;

export const AdoptionDetailContainer = styled.div`
   .content-box {
      width: 1200px;
      margin: auto;
      border: 3px solid #efefef;
      padding: 30px;
      box-sizing: border-box;
      border-radius: 0 0 30px 30px;
      display: flex;
      flex-wrap: wrap;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      background: #fff;
      z-index: 100;
      .img-box {
         width: 48%;
         height: 400px;
         overflow: hidden;
         padding: 15px;
         border: 1px solid #efefef;
         box-sizing: border-box;
         margin-bottom: 50px;
         img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 0 0;
         }
      }
      .maps {
         width: 48%;
         height: 400px;
         overflow: hidden;
         margin-top: 50px;
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
         }
      }
      .text-box {
         width: 50%;
         display: flex;
         padding: 20px;
         box-sizing: border-box;
         flex-direction: column;
         p {
            padding-bottom: 5px;
            margin-bottom: 5px;
            span {
               &:first-child {
                  margin-right: 10px;
                  font-weight: 700;
               }
            }
         }
         &.bottom {
            justify-content: center;
         }
      }
      .desertionNo {
         text-align: center;
         font-size: 20px;
         line-height: 50px;
         font-weight: 700;
         position: absolute;
         top: -53px;
         left: 100px;
         width: 300px;
         height: 50px;
         border: 3px solid #efefef;
         border-radius: 20px 20px 0 0;
         box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
         background: #fff;
         z-index: -10;
         &::before {
            content: '유기번호';
            position: absolute;
            font-size: 13px;
            top: -18px;
            left: 50%;
            transform: translateX(-50%);
            color: #bbb;
         }
      }
   }
   .btn-box {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
         margin-top: 50px;
         font-size: 15px;
         background-color: ${mainColor};
         border: 1px solid #f39c12;
         border-radius: 5px;
         padding: 10px 20px;
         box-shadow: 0px 6px 0px #f39c12;
         transition: all 0.1s;
         cursor: pointer;
         &:first-child {
            margin-right: 10px;
         }
         &:active {
            box-shadow: 0px 2px 0px #d35400;
            position: relative;
            top: 2px;
         }
      }
   }
`;

export const QnAContainer = styled.div`
   h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 50px;
   }
   ul {
      width: 100%;
      li {
         border-bottom: 1px solid #fff;
         .tit-area {
            background: ${mainColor};
            display: flex;
            position: relative;
            padding: 10px;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;

            span {
               width: 10%;
               &:first-child {
                  width: 5%;
               }
               &:nth-child(2) {
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  text-align: left;
               }
            }
            p {
               width: 80%;
               text-align: left;
               overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;
               padding: 0 5px;
               font-weight: 700;
            }
            button {
               width: 2%;
               background: transparent;
               border: none;
               cursor: pointer;
            }
         }
         .content {
            background: ${subColor};
            box-sizing: border-box;
            color: #efefef;
            overflow: hidden;
            transition: height 0.4s ease-in-out;
            .ask-area {
               padding-bottom: 10px;
               border-bottom: 1px solid #000;
               margin-bottom: 10px;
               display: flex;
               justify-content: space-between;
               p {
                  width: 93%;
                  padding: 10px;
                  box-sizing: border-box;
               }
               .btn-area {
                  width: 4%;
                  padding: 10px 0;
                  box-sizing: border-box;
                  button {
                     background: ${mainColor};
                     padding: 2px 5px;
                     border-radius: 3px;
                     cursor: pointer;
                     border: none;
                     /* color: #555; */
                     &:first-child {
                        margin-bottom: 5px;
                     }
                  }
               }
            }
            .answer-area {
               padding: 10px;
               box-sizing: border-box;
            }
         }
      }
   }
   .contents + .btn-area {
      margin-top: 50px;
      text-align: right;
      button {
         font-size: 12px;
         background-color: ${pointColor};
         color: #fff;
         border: 1px solid #f39c12;
         border-radius: 5px;
         padding: 10px 20px;
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
`;

export const AddQnAContainer = styled.div`
   h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 50px;
   }
   form {
      width: 1000px;
      margin: auto;
      label {
         display: block;
         font-size: 20px;
         font-weight: 700;
         margin-bottom: 10px;
      }
      input {
         width: 100%;
         padding: 10px;
         outline: none;
         border: none;
         border-bottom: 3px solid ${mainColor};
         margin-bottom: 20px;
         box-sizing: border-box;
      }
      textarea {
         width: 100%;
         height: 300px;
         outline: none;
         border: 3px solid ${subColor};
         padding: 10px;
         box-sizing: border-box;
      }
      .btn-area {
         text-align: center;
         margin-top: 50px;
         button {
            padding: 10px 30px;
            box-sizing: border-box;
            &:first-child {
               border-radius: 50px 0 0 50px;
            }
            &:last-child {
               border-radius: 0 50px 50px 0;
            }
            &:hover {
               background: ${pointColor};
               color: #fff;
            }
         }
      }
   }
`;

export const ProfileEditContent = styled.div`
   position: fixed;
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;
   z-index: 500;
   background: rgba(0, 0, 0, 0.5);
   .update-profile {
      position: absolute;
      width: 700px;
      height: 800px;
      background: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;
      border-radius: 30px;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
         rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      padding: 20px;
      box-sizing: border-box;
      .close {
         position: absolute;
         top: 10px;
         right: 10px;
         border: none;
         background: transparent;
         cursor: pointer;
         transition: 0.4s;
         i {
            font-size: 25px;
         }
         &:hover {
            transform: rotate(180deg);
         }
      }
      h2 {
         text-align: center;
         font-size: 30px;
         font-weight: 700;
         margin-bottom: 50px;
      }
      form {
         .img-area {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            .preview {
               width: 200px;
               height: 200px;
               margin: auto;
               border-radius: 50%;
               overflow: hidden;
               img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: 50% 50%;
               }
            }
            ul {
               display: flex;
               justify-content: center;
               margin: 30px 0;
               li {
                  width: 80px;
                  height: 80px;
                  margin-right: 20px;
                  border: 3px solid #efefef;
                  &:last-child {
                     margin-right: 0;
                  }
                  img {
                     width: 100%;
                     height: 100%;
                     object-fit: cover;
                     object-position: 50% 50%;
                     cursor: pointer;
                  }
               }
            }
         }
         .text-area {
            p {
               label {
                  display: block;
                  font-size: 18px;
               }
               input {
                  width: 100%;
                  padding: 5px 10px;
                  box-sizing: border-box;
                  outline: none;
                  border: none;
                  border-bottom: 2px solid #efefef;
                  margin-bottom: 10px;
               }
            }
         }
         .btn-area {
            text-align: center;
            margin-top: 50px;
            button {
               width: 85px;
               padding: 10px;
               &:first-child {
                  margin-right: 10px;
               }
               &:hover {
                  background: ${subColor};
                  color: #fff;
               }
            }
         }
      }
   }
`;

export const MyDogContainer = styled.div`
   .myDogInfo {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      .img-area {
         width: 200px;
         height: 200px;
         margin-right: 20px;
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
         }
      }
      .text-area {
         display: flex;
         justify-content: center;
         flex-direction: column;
         span {
            margin-right: 20px;
            font-weight: 700;
         }
      }
   }
   .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 4px;
      width: 80%;
      max-width: 400px;
   }
   form {
      width: 1100px;
      margin: auto;
      position: relative;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      padding: 50px;
      box-sizing: border-box;
      .today {
         position: absolute;
         top: 70px;
         right: 50px;
      }
      h2 {
         margin-bottom: 50px;
         font-weight: 700;
         font-size: 30px;
         padding-bottom: 10px;
         text-align: center;
      }

      h3 {
         font-weight: 700;
         font-size: 20px;
         margin: 10px 0;
         color: ${subColor};
      }
      .userInfo {
         span,
         label {
            padding-left: 10px;
            position: relative;
            &::after {
               content: '*';
               width: 5px;
               height: 5px;
               position: absolute;
               top: 5px;
               transform: translateY(-50%);
               left: 0;
               color: ${pointColor};
            }
         }
      }
      .userInfo,
      .ask-area {
         width: 100%;
         label {
            display: block;
            margin: 10px 0 5px;
         }
         select {
            padding: 11px 5px;
            margin-right: 10px;
            border: 1px solid #efefef;
         }
         input {
            padding: 10px 5px;
            border: none;
            border-bottom: 1px solid ${mainColor};
            background: transparent;
            margin-right: 5px;
            &.wid100 {
               width: 100px;
               margin-right: 10px;
            }
            &.wid200 {
               width: 200px;
               margin-right: 10px;
            }
            &.wid400 {
               width: 400px;
            }
            &.wid700 {
               width: 700px;
               display: block;
            }
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
               -webkit-appearance: none;
               margin: 0;
            }
         }
         .addr-search {
            padding: 10px;
            margin-bottom: 10px;
         }
         input[type='radio'] {
            vertical-align: middle;
            cursor: pointer;
         }
         input[type='radio'] + span {
            margin-left: 5px;
         }
         strong + label {
            margin: 0;
         }
         strong {
            display: block;
            margin: 10px 0;
         }
         textarea {
            width: 100%;
            resize: none;
            outline: none;
            padding: 5px;
            box-sizing: border-box;
            border: 1px solid #efefef;
         }
         p {
            margin: 10px 0;
         }
      }
      .btn-area {
         margin-top: 20px;
         text-align: center;
         button {
            background: ${subColor};
            padding: 10px 30px;
            color: #fff;
         }
      }
   }
`;

export const MainVisualContainer = styled.div`
   position: relative;
   width: 100%;
   height: 900px;
   overflow: hidden;
   .img-container {
      width: 1200px;
      height: 700px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      border-radius: 300px;
      overflow: hidden;
      border: 10px solid #efefef;
      transition: 0.4s;
      .img-area {
         width: 100%;
         height: 100%;
         background-image: url('../images/visual_2.jpg');
         background-position: 50% 50%;
         background-size: cover;
         background-repeat: no-repeat;
         transition: 0.4s;
         &:hover {
            transform: scale(1.1);
         }
      }
   }
   .animated-title {
      font-size: 130px;
      position: relative;
      width: 100%;
      height: 100%;
      transform: rotate(-10deg);
      position: absolute;
      top: 150px;
      left: 0;
      display: flex;
      flex-direction: column;
      .track {
         position: absolute;
         white-space: nowrap;
         will-change: transform;
         .content {
            animation: rtlText 600s linear infinite;
            font-size: 120px;
            text-transform: uppercase;
            font-weight: 600;
            white-space: nowrap;
            margin-bottom: 10px;
            color: #fff;
            text-shadow: -1px 0 ${mainColor}, 0 1px ${mainColor}, 1px 0 ${mainColor}, 0 -1px ${mainColor};
            font-family: ${fontImpact};
            &:nth-child(2) {
               animation: ltrText 600s linear infinite;
            }
            strong {
               color: ${mainColor};
            }
         }
      }
   }
   @keyframes rtlText {
      from {
         transform: translateX(0);
      }
      to {
         transform: translateX(-50%);
      }
   }
   @keyframes ltrText {
      from {
         transform: translateX(-50%);
      }
      to {
         transform: translateX(0);
      }
   }
`;

export const TailWagCountdownContainer = styled.div`
   height: 400px;
   .dog {
      width: 120px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
   .body {
      background: ${mainColor};
      border-radius: 300px 300px 0 0;
      height: 300px;
   }

   .beard {
      width: 55px;
      height: 65px;
      background: #804040;
      margin: 0 auto;
      border-radius: 20px;
      position: relative;
      &:after {
         content: '';
         background: #804040;
         width: 26px;
         height: 13px;
         border-radius: 0 0 25px 25px;
         display: block;
         margin: 0 auto;
         transform: translateY(64px);
      }
      &:before {
         content: '';
         background: #000;
         width: 20px;
         height: 10px;
         border-radius: 0 0 20px 20px;
         display: block;
         margin: 0 auto;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
      }
   }

   .mouth {
      background: #1a243c;
      width: 30px;
      height: 15px;
      border-radius: 0 0 30px 30px;
      position: absolute;
      top: 22px;
      margin: auto;
      left: 0;
      right: 0;
      border-top: 3px solid #fff;
      box-sizing: border-box;
      .tongue {
         width: 20px;
         height: 30px;
         border-radius: 5px 5px 10px 10px;
         background: ${pointColor};
         margin: 0 auto;
         position: relative;
         top: 4px;
         transition: 300ms;
         animation: grow 0.1s infinite alternate;
      }
   }

   .eyes {
      background: #fff;
      width: 20px;
      height: 24px;
      border-radius: 20px 20px 0 0;
      display: block;
      margin: 0 auto;
      position: relative;
      top: 2px;
      &:before,
      &:after {
         content: '';
         width: 10px;
         height: 10px;
         background: #000;
         display: block;
         border-radius: 50%;
         top: 50%;
         position: absolute;
         animation: squeeze 1.2s infinite;
      }
      &:before {
         left: -13px;
      }
      &:after {
         right: -13px;
      }
   }

   .belt {
      height: 30px;
      background: ${pointColor};
      margin-top: 20px;
      position: relative;
      .locket {
         width: 30px;
         height: 30px;
         background: #ffc442;
         margin: 0 auto;
         border-radius: 50%;
         transform: translateY(50%);
      }
      .dot {
         width: 10px;
         height: 10px;
         background: #fff;
         position: absolute;
         border-radius: 50%;
         top: 0;
         bottom: 0;
         margin: auto;
         &.dot1 {
            margin-left: 10px;
         }
         &.dot2 {
            margin-left: 34px;
         }
         &.dot3 {
            margin-left: 77px;
         }
         &.dot4 {
            margin-left: 100px;
         }
      }
      &:before,
      &:after {
         content: '';
         position: absolute;
         width: 5px;
         height: 10px;
         background: #fff;
         top: 0;
         bottom: 0;
         margin: auto;
      }
      &:before {
         left: -5px;
         border-radius: 10px 0 0 10px;
      }
      &:after {
         right: -5px;
         border-radius: 0 10px 10px 0;
      }
   }

   .stomach {
      width: 56px;
      height: 130px;
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 120px 120px 0 0;
   }

   .legs {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 12px;
      &:before,
      &:after {
         height: 12px;
         border-radius: 20px 20px 0 0;
         display: inline-block;
         content: '';
         position: absolute;
         background: #804040;
         width: 45px;
      }
      &:before {
         left: -37px;
      }
      &:after {
         right: -37px;
      }
      .left,
      .right {
         display: inline;
         width: 12px;
         height: 55px;
         background: #804040;
         position: absolute;
         bottom: 0;
         &:before {
            content: '';
            width: 28px;
            height: 12px;
            background: ${mainColor};
            border-radius: 20px 20px 0 0;
            display: inline-block;
            bottom: 0;
            position: absolute;
         }
      }
      .left {
         left: -12px;
         border-radius: 20px 0 0 0;
         &:before {
            transform: translateX(-1px);
         }
      }
      .right {
         right: -12px;
         border-radius: 0 20px 0 0;
         z-index: 1;
         &:before {
            transform: translateX(-13px);
         }
      }
   }

   .ears {
      position: absolute;
      z-index: -1;
      top: -20px;
      &:after,
      &:before {
         content: '';
         display: inline-block;
         background: #804040;
         width: 40px;
         height: 90px;
         border-radius: 100% 100% 0 0;
      }
      &:after {
         transform: translateX(40px);
         border: 10px solid ${mainColor};
         box-sizing: border-box;
      }
   }

   .tail {
      background: ${mainColor};
      width: 14px;
      height: 80px;
      position: absolute;
      z-index: -1;
      right: 10px;
      bottom: 40px;
      transform: rotate(30deg);
      border-radius: 14px;
      transform-origin: bottom;
      transition: 300ms;
      animation: shake 0.08s infinite alternate;
   }

   .tag {
      border-left: 5px solid ${pointColor};
      border-bottom: 5px solid ${pointColor};
      width: 500%;
      height: 161px;
      z-index: 2;
      position: absolute;
      top: 30px;
      left: 100px;
      box-sizing: border-box;
      border-bottom-left-radius: 40px;
   }

   @keyframes squeeze {
      90% {
         transform: none;
         animation-timing-function: ease-in;
      }
      93% {
         transform: scale(1.2, 0.3);
      }
      100% {
         animation-timing-function: ease-out;
      }
   }

   @keyframes grow {
      0% {
         animation-timing-function: ease-in;
      }
      100% {
         height: 35px;
      }
   }

   @keyframes shake {
      0% {
         transform: rotate(30deg);
      }
      100% {
         transform: rotate(40deg);
      }
   }
`;

export const LpContainer = styled.div`
   width: 100%;
   height: 250vh;
   padding-top: 300px;
   padding-bottom: 600px;
   box-sizing: border-box;
   position: relative;
   overflow: hidden;
   .inner {
      width: 100%;
      height: 100%;

      position: relative;
      .lp {
         position: absolute;
         top: 0;
         left: 50%;
         transform: translateX(-50%);
         .bg {
            background-color: ${mainColor};
            border-radius: 50%;
            width: 300px;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            span {
               display: block;
               font-size: 50px;
               position: absolute;
               font-family: ${fontImpact};
               left: 50%;
               &:nth-of-type(1) {
                  color: ${pointColor};
                  top: 5%;
                  transform: translateX(-50%);
               }
               &:nth-of-type(2) {
                  color: ${subColor};
                  transform: translateX(-50%) rotate(180deg);
                  bottom: 5%;
               }
            }
         }
         .core {
            width: 300px;
            height: 300px;
            box-sizing: border-box;
            border: 20px solid ${subColor};
            border-radius: 50%;
            background-color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .center {
               width: 25px;
               height: 25px;
               border-radius: 50%;
               background-color: ${pointColor};
               position: absolute;
               left: 50%;
               top: 50%;
               transform: translate(-50%, -50%);
               &::after {
                  content: '';
                  width: 60px;
                  height: 60px;
                  border: 1px solid #efefef;
                  border-radius: 50%;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
               }
            }
         }
         .line {
            border-radius: 50%;
            border: 1px solid #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            &.line1 {
               width: 600px;
               height: 600px;
            }
            &.line2 {
               width: 850px;
               height: 850px;
            }
            &.line3 {
               width: 900px;
               height: 900px;
            }
            &.line4 {
               width: 1000px;
               height: 1000px;
            }
         }
      }
   }
`;

// Typing
export const TypingContainer = styled.div`
   background: ${mainColor};
   padding: 70px;
   box-sizing: border-box;
   /* border-top: 1px solid #fff; */
   .text-area {
      text-align: center;
      font-weight: 900;
      font-size: 60px;
      letter-spacing: -5px;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      background-image: url('./images/visual_3.jpg');
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      div {
      }
   }
`;

// MenuSlide
export const MenuSlideContainer = styled.div`
   padding: 400px 0;
   box-sizing: border-box;
   position: relative;
   /* background-color: ${mainColor}; */
   overflow: hidden;
   .menus {
      width: 600px;
      margin: auto;
      font-size: 130px;
      text-align: center;
      font-family: ${fontImpact};
      a {
         color: ${subColor};
         transition: 0.4s;
         &:hover {
            color: ${pointColor};
         }
      }
   }
   .bgImg {
      div {
         background-position: 50% 50%;
         background-size: cover;
         background-repeat: no-repeat;
         position: absolute;
         border-radius: 20px;
         &:nth-child(1) {
            width: 360px;
            height: 470px;
            top: 100px;
            left: 200px;
            background-image: url('./images/visual_slides_7.jpg');
         }
         &:nth-child(2) {
            width: 260px;
            height: 340px;
            top: 600px;
            left: 120px;
            background-image: url('./images/visual_slides_6.jpg');
         }
         &:nth-child(3) {
            width: 195px;
            height: 260px;
            top: 50px;
            left: 1370px;
            background-image: url('./images/visual_slides_8.jpg');
         }
         &:nth-child(4) {
            width: 330px;
            height: 330px;
            top: 350px;
            left: 1500px;
            background-image: url('./images/visual_slides_9.jpg');
         }
         &:nth-child(5) {
            width: 286px;
            height: 336px;
            top: 650px;
            left: 1200px;
            background-image: url('./images/visual_slides_5.jpg');
         }
      }
   }
`;

export const WagTailDogContainer = styled.div`
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-size: fill;
   width: 800px;
   height: 600px;
   margin: 60px auto;
   padding: 0;
   position: relative;
   .dog {
      position: absolute;
      top: 52%;
      width: 50vmin;
      height: 40vmin;
      z-index: 0;
   }
   .heart {
      position: absolute;
      width: 6%;
      height: 7%;
      background-color: ${pointColor};
      border-bottom-right-radius: 23%;
      opacity: 0;
      animation-fill-mode: both;
      @keyframes heart-beat {
         0% {
            transform: scale(0.75) rotate(35deg);
            opacity: 1;
         }
         5%,
         15%,
         25% {
            transform: scale(1) rotate(35deg);
         }
         10%,
         20% {
            transform: scale(0.75) rotate(35deg);
         }
         70% {
            opacity: 1;
         }
         100% {
            transform: rotate(35deg) translateY(-10px) translateX(-10px);
            opacity: 0;
         }
      }
      &--1 {
         top: -25%;
         left: 15%;
         animation: heart-beat 2s ease-out infinite 1.5s;
      }
      &--2 {
         top: -36%;
         left: 7%;
         animation: heart-beat 2s ease-out infinite 1s;
      }
      &--3 {
         top: -48%;
         left: 14%;
         animation: heart-beat 2s ease-out infinite 0.5s;
      }
      &--4 {
         top: -53%;
         left: -3%;
         animation: heart-beat 2s ease-out infinite;
      }
   }
   .heart:before,
   .heart:after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      border-radius: 50%;
      background-color: ${pointColor};
   }
   .heart:after {
      bottom: 0px;
      left: -53%;
   }
   .heart:before {
      top: -53%;
      right: 0px;
      transform: rotate(45deg);
   }
   .body {
      position: absolute;
      width: 100%;
      height: 50%;
      background-color: #f79e38;
      border-top-right-radius: 17% 40%;
      border-top-left-radius: 25%;
      border-bottom-right-radius: 5% 13%;
      border-bottom-left-radius: 30% 40%;
      z-index: 3;
   }
   .cheast {
      position: absolute;
      width: 45%;
      height: 100%;
      background-color: #fff;
      border-top-right-radius: 17% 40%;
      border-top-left-radius: 25%;
      border-bottom-right-radius: 40% 40%;
      border-bottom-left-radius: 40% 40%;
      z-index: 4;
      &:after,
      &:before {
         position: absolute;
         content: '';
         width: 7%;
         height: 55%;
         border-radius: 39%;
         background-color: #fff;
      }
      &:after {
         top: 36%;
         left: 3%;
         transform: rotate(-1deg);
      }
      &:before {
         top: 19%;
         left: -4%;
      }
   }
   .head {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 4;
      animation: dog-head 1s ease-out infinite;
      animation-fill-mode: both;
      animation-direction: alternate;
      @keyframes dog-head {
         to {
            transform: translateX(-3px) rotate(3deg);
         }
      }
   }
   .tail {
      position: absolute;
      top: -14%;
      left: 92%;
      width: 10%;
      height: 45%;
      background-color: #f79e38;
      border-top-right-radius: 30% 30%;
      border-top-left-radius: 40% 30%;
      border-bottom-right-radius: 30% 40%;
      border-bottom-left-radius: 40% 40%;
      z-index: 2;
      transform: rotate(20deg);
      animation: dog-tail 170ms ease-out infinite;
      @keyframes dog-tail {
         from,
         to {
            transform: rotate(10deg);
         }
         50%,
         60% {
            transform: rotate(70deg) translateX(10px) translateY(2px);
         }
      }
      &:before {
         position: absolute;
         content: '';
         top: -8%;
         left: -7%;
         width: 100%;
         height: 50%;
         background-color: #f79e38;
         border-radius: 50%;
         animation: dog-tail-before 160ms ease-out infinite;
         @keyframes dog-tail-before {
            from,
            to {
               transform: translateX(0);
            }
            50% {
               transform: translateX(3px);
            }
         }
      }
   }
   .legs {
      position: absolute;
      top: 97%;
      left: 0;
      width: 100%;
      height: 30%;
      z-index: 2;
      animation: dog-legs 1s ease-out infinite 1.5s;
      animation-fill-mode: both;
      animation-direction: alternate;
      @keyframes dog-legs {
         from {
            transform: translateY(-1px);
         }
         to {
            transform: translateY(0px);
         }
      }
      &__front,
      &__back {
         width: 10%;
         height: 100%;
         background-color: #f79e38;
         position: absolute;
         border-bottom-right-radius: 100%;
         border-bottom-left-radius: 100%;
         &:after {
            content: '';
            position: absolute;
            top: 50%;
            width: 100%;
            height: 49%;
            background-color: #fff;
            border-bottom-right-radius: 100%;
            border-bottom-left-radius: 100%;
         }
      }
      &__front {
         &--left {
            left: 38%;
            transform: rotate(1deg);
         }
         &--right {
            left: 20%;
            transform: rotate(-4deg);
         }
      }
      &__back {
         &--left {
            left: 69%;
            transform: rotate(-7deg);
         }
         &--right {
            left: 85%;
            transform: rotate(2deg);
         }
      }
   }
   .face {
      height: 40%;
      width: 42%;
      position: absolute;
      top: -13%;
      left: -3%;
      background-color: #fff;
      border-top-right-radius: 45% 50%;
      border-top-left-radius: 35% 50%;
      border-bottom-left-radius: 35% 21%;
      z-index: 6;
      &:after,
      &:before {
         content: '';
         position: absolute;
         background-color: #f79e38;
      }
      &:after {
         width: 27%;
         left: 7%;
         height: 23%;
         border-top-right-radius: 100% 100%;
         border-bottom-left-radius: 49% 100%;
         transform: rotate(-64deg);
         top: -1%;
         border-top-left-radius: 0% -20%;
         border-bottom-right-radius: 52% 0%;
         box-shadow: rgba(0, 0, 0, 0.1) 2px -6px 11px 1px;
      }
      &:before {
         width: 55%;
         left: 42%;
         top: 0%;
         height: 35%;
         border-radius: 23% 7% 16% 12%;
         transform: rotate(0deg) scaleX(-1);
      }
   }
   .eye {
      width: 6%;
      height: 6%;
      position: absolute;
      border-radius: 100%;
      top: 24%;
      background-color: #000;
      z-index: 6;
      animation: dog-eye 200ms * 9 infinite;
      @keyframes dog-eye {
         from,
         to {
            animation-timing-function: step-end;
            opacity: 1;
         }
         50%,
         55% {
            animation-timing-function: step-start;
            opacity: 0;
         }
      }
      &--left {
         left: 27%;
      }
      &--right {
         left: 46%;
      }
   }
   .mouth {
      background-color: transparent;
      border-color: #000;
      width: 44%;
      border-style: solid;
      border-width: 0.7vmin;
      height: 48%;
      z-index: 6;
      position: absolute;
      bottom: 35%;
      left: 14%;
      border-top-color: transparent;
      border-bottom-left-radius: 72% 100%;
      border-bottom-right-radius: 77% 100%;
      border-right-color: transparent;
      border-top-right-radius: 50%;
      border-left-color: transparent;
      transform: rotate(-41deg);
   }
   .year {
      position: absolute;
      &--left {
         top: -40%;
         left: 3%;
         height: 47%;
         width: 19%;
         z-index: 1;
         background-color: #e99036;
         border-top-left-radius: 68% 100%;
         border-top-right-radius: 100% 100%;
         transform-origin: bottom center;
         animation: left-year 1000ms ease-out infinite;
         animation-fill-mode: both;
         animation-direction: alternate;
         @keyframes left-year {
            from {
               transform: rotate(-26deg);
            }
            25% {
               transform: rotate(-35deg);
            }
            50% {
               transform: rotate(-26deg);
            }
            to {
               transform: rotate(-40deg);
            }
         }
      }
      &--right {
         top: -39%;
         left: 19%;
         height: 38%;
         width: 18%;
         z-index: 1;
         background-color: #f79e38;
         border-top-left-radius: 56% 100%;
         border-top-right-radius: 100% 100%;
         transform-origin: bottom center;
         border-bottom-right-radius: 14% 38%;
         animation: right-year 1000ms ease-out infinite;
         animation-fill-mode: both;
         animation-direction: alternate;
         @keyframes right-year {
            from {
               transform: rotate(-331deg);
            }
            25% {
               transform: rotate(-320deg);
            }
            50% {
               transform: rotate(-331deg);
            }
            to {
               transform: rotate(-320deg);
            }
         }
      }
   }
   .nose {
      position: absolute;
      width: 24%;
      height: 24%;
      background-color: #fff;
      z-index: 7;
      left: -12%;
      top: -3%;
      border-bottom-left-radius: 50% 88%;
      border-top-left-radius: 11% 43%;
      transform: rotate(12deg);
      &:after {
         content: '';
         position: absolute;
         width: 50%;
         height: 55%;
         background-color: #000;
         border-radius: 100%;
         left: -7%;
         top: -18%;
      }
   }
`;

export const SystemContainer = styled.div`
   h2 {
      font-size: 50px;
      font-family: ${fontBagelFatOne};
      text-align: center;
      margin-bottom: 50px;
   }
   .dashboard {
      width: 100%;
      text-align: center;
      .main-graph {
         width: 100%;
         height: 400px;
         background: #efefef;
         margin-bottom: 33px;
         margin-top: 33px;
         line-height: 400px;
      }
      .data-summary-view {
         display: flex;
         justify-content: space-between;
         height: 150px;
         margin-bottom: 33px;
         .result-display {
            width: 50%;
            display: flex;
            .result {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               width: 200px;
               border: 1px solid #efefef;
               margin-right: 33px;
               span {
               }
               p {
                  font-size: 50px;
                  font-weight: 700;
               }
            }
         }
         .stats {
            width: 50%;
            background: ${pointColor};
         }
      }
   }
   .page-controller {
      display: flex;
      justify-content: space-between;
      button {
         padding: 10px 20px;
         width: 19%;
      }
   }
   .bg {
      position: fixed;
      background: rgba(0, 0, 0, 0.5);
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: 500;
   }
   .popup {
      position: absolute;
      width: 1500px;
      height: 800px;
      background: #efefef;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 30px;
      padding: 20px;
      box-sizing: border-box;
      .close {
         position: absolute;
         top: 20px;
         right: 20px;
         border: none;
         cursor: pointer;
         background: transparent;
         font-size: 20px;
         z-index: 10;
      }
      .data-area {
         position: relative;
         .btn-area {
            button {
               width: 200px;
               height: 40px;
               background: ${subColor};
               border-radius: 20px 20px 0 0;
               color: #fff;
               border: none;
               margin-right: 4px;
               cursor: pointer;
               &.on {
                  background-color: ${mainColor};
               }
            }
         }
         .content {
            width: 100%;
            height: 720px;
            background: #fff;
            border-radius: 0 0 20px 20px;
         }
      }
   }
`;
// RollingBanner
export const RollingBannerContainer = styled.div`
   .mySwiper {
      .swiper-wrapper {
         transition-timing-function: linear;
         .swiper-slide {
            height: 100px;

            &:nth-child(3n) {
               background-color: ${mainColor};
            }
            &:nth-child(3n + 1) {
               background-color: ${subColor};
            }
            &:nth-child(3n + 2) {
               background-color: ${pointColor};
            }
            a {
               width: 100%;
               height: 100%;
               color: #fff;
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 20px;
               font-weight: 900;
            }
         }
      }
   }
`;
// MenuCross
export const MenuCrossContainer = styled.div`
   .mySwiper {
      height: 600px;
      .swiper-slide {
         display: flex;
         .icon-box {
            width: 50%;
            box-sizing: border-box;
            text-align: center;
            font-size: 200px;
            line-height: 700px;
            background: ${subColor};
            color: #fff;
            transition: 0.4s;
         }
         .text-box {
            width: 50%;
            background: ${mainColor};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            box-sizing: border-box;
            transition: 0.4s;
            a {
               font-size: 70px;
               display: block;
               margin-bottom: 20px;
               font-family: ${fontBagelFatOne};
               color: ${subColor};
            }
            p {
               text-align: center;
               font-size: 20px;
            }
         }
         &:hover {
            .text-box {
               background: #000;
               a {
                  font-size: 100px;
                  color: #fff;
               }
               p {
                  display: none;
               }
            }
            .icon-box {
               font-size: 300px;
               background: ${pointColor};
               color: #fff;
            }
         }
      }
   }
`;

// SearchBox
export const SearchBoxContainer = styled.table`
   width: 100%;
   th,
   td {
      text-align: center;
      vertical-align: middle;
      padding: 10px 20px;
      box-sizing: border-box;
   }
   td {
      border-bottom: 1px solid #dcdcdc;
      &.notice {
         &:nth-child(3) {
            text-align-last: left;
         }
      }
      &.qna {
         &:nth-child(2),
         &:nth-child(3) {
            text-align-last: left;
         }
      }
   }
`;
