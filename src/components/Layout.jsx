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
<<<<<<< HEAD
         <GoTopBtn />
         <InfoBubble />
         <Footer />
=======
         {/* <Footer /> */}
>>>>>>> a7df5ca0f5819f746182030aba88380c674d59d3
      </WrapContainer>
   );
});

export default Layout;
