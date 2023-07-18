import React, { memo, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { MainContainer, WrapContainer } from '../styled/GamilyStyle';
import GoTopBtn from './GoTopBtn';
import InfoBubble from './InfoBubble';

const Layout = memo(() => {
   const [isHeaderOn, setIsHeaderOn] = useState(true); // 헤더 상태
   const [inHeader, setInHeader] = useState(false); // 헤더 안에 있는지 여부

   const handleScroll = () => {
      if (window.scrollY < 110) {
         setIsHeaderOn(true);
      } else {
         setIsHeaderOn(false);
         setInHeader(false);
      }
   };

   const onEnter = () => {
      if (window.scrollY !== 0) {
         setIsHeaderOn(true);
         setInHeader(true);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   return (
      <WrapContainer>
         <Header onEnter={onEnter} isHeaderOn={isHeaderOn} inHeader={inHeader} handleScroll={handleScroll} />
         <MainContainer className={isHeaderOn && window.scrollY <= 110 ? 'on' : ''}>
            <Outlet />
         </MainContainer>
         <GoTopBtn />
         <InfoBubble />
         <Footer />
      </WrapContainer>
   );
});

export default Layout;
