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
   }
   .text-area {
      height: 100vh;
      width: 1400px;
      margin: auto;

      &:hover h2 span {
         opacity: 1;
      }
      h2 {
         font-family: ${fontLogo};
         margin-top: 300px;
         font-size: 120px;
         line-height: 1;
         letter-spacing: -5px;
         -webkit-text-stroke: 3px rgba(255, 255, 255, 0.5);
         /* mix-blend-mode: difference; */
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
