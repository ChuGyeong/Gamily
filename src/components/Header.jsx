import React, { memo, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { HeaderContainer } from '../styled/GamilyStyle';
import SubNav from './SubNav';

const Header = () => {
   const [isHeaderOn, setIsHeaderOn] = useState(true); // 헤더 상태
   const [inHeader, setInHeader] = useState(false); // 헤더 안에 있는지 여부
   const timerRef = useRef(null); // 타이머 참조

   const handleScroll = () => {
      setIsHeaderOn(false);
      setInHeader(false);
   };

   const onEnter = () => {
      setIsHeaderOn(true);
      setInHeader(true);
   };

   useEffect(() => {
      timerRef.current = setTimeout(() => {
         setIsHeaderOn(false);
      }, 2000);
      return () => {
         clearTimeout(timerRef.current);
      };
   }, []);

   useEffect(() => {
      if (inHeader) {
         clearTimeout(timerRef.current);
      }
   }, [inHeader]);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   return (
      <HeaderContainer onMouseEnter={onEnter} onMouseLeave={handleScroll}>
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
