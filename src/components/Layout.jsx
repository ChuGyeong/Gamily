import React, { memo } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { MainContainer, WrapContainer } from '../styled/GamilyStyle';
import GoTopBtn from './GoTopBtn';
import InfoBubble from './InfoBubble';

const Layout = memo(() => {
   return (
      <WrapContainer>
         <Header />
         <MainContainer>
            <Outlet />
         </MainContainer>
         <GoTopBtn />
         <InfoBubble />
         <Footer />
      </WrapContainer>
   );
});

export default Layout;
