import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HeaderContainer } from '../styled/GamilyStyle';
import SubNav from './SubNav';

const Header = () => {
   const [isHeaderOn, setIsHeaderOn] = useState(true);

   const handleScroll = () => {
      setIsHeaderOn(false);
   };

   useEffect(() => {
      const timeoutID = setTimeout(() => {
         setIsHeaderOn(false);
      }, 2000);

      window.addEventListener('scroll', handleScroll);

      return () => {
         clearTimeout(timeoutID);
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <HeaderContainer onMouseEnter={() => setIsHeaderOn(true)} onMouseLeave={handleScroll}>
         <div className={`inner ${isHeaderOn ? 'on' : ''}`}>
            <div className="content-inner">
               <h1>
                  <Link to={'/'}>
                     <img src="./images/logo-removebg.png" />
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
