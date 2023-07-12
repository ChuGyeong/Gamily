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
