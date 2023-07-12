import React, { memo } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { MainContainer, WrapContainer } from '../styled/GamilyStyle';

const Layout = memo(() => {
   return (
      <WrapContainer>
         <Header />
         <MainContainer>
            <Outlet />
         </MainContainer>
         {/* <Footer /> */}
      </WrapContainer>
   );
});

export default Layout;
