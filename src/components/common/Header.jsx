import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HeaderContainer } from '../../styled/GamilyStyle';
import SubNav from './SubNav';

const Header = ({ onEnter, isHeaderOn, inHeader, handleScroll }) => {
   return (
      <HeaderContainer
         onMouseEnter={onEnter}
         onMouseLeave={() => {
            if (window.scrollY !== 0) handleScroll();
         }}>
         <div className={`inner ${isHeaderOn ? 'on' : ''}`}>
            <div className="content-inner">
               <h1>
                  <Link to={'/'}>
                     <img src="../../images/logo.png" />
                  </Link>
               </h1>
               <Navbar />
               <SubNav />
            </div>
         </div>
      </HeaderContainer>
   );
};

export default Header;
