import React, { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HeaderContainer, InnerContainer } from '../styled/GamilyStyle';
import SubNav from './SubNav';

const Header = memo(() => {
   const [isHeaderOn, setIsHeaderOn] = useState(true);
   const handleScroll = () => {
      if (window.scrollY < 100) setIsHeaderOn(true);
      else setIsHeaderOn(false);
   };
   useEffect(() => {
      const timer = setInterval(() => {
         window.addEventListener('scroll', handleScroll);
      }, 100);
      return () => {
         clearInterval(timer);
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   return (
      <HeaderContainer onMouseEnter={() => setIsHeaderOn(true)} onMouseLeave={handleScroll}>
         <div className={`inner ${isHeaderOn ? 'on' : ''}`}>
            <h1>
               <Link to={'/'}>
                  <img src="../../public/images/logo-removebg.png" />
               </Link>
            </h1>
            <Navbar />
            <SubNav />
         </div>
      </HeaderContainer>
   );
});

export default Header;
