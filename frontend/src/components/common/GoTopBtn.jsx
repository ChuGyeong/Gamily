import React, { memo, useEffect, useState } from 'react';
import { GoTopButton } from '../../styled/GamilyStyle';
import { AiFillCaretUp } from 'react-icons/ai';

const GoTopBtn = memo(() => {
   const [isShowBtn, setIsShowBtn] = useState(false);
   useEffect(() => {
      const handleShowButton = () => {
         if (window.scrollY > 500) {
            setIsShowBtn(true);
         } else {
            setIsShowBtn(false);
         }
      };
      window.addEventListener('scroll', handleShowButton);
      return () => {
         window.removeEventListener('scroll', handleShowButton);
      };
   }, []);
   const scrollToTop = () => {
      window.scroll({
         top: 0,
         behavior: 'smooth',
      });
   };
   return (
      <GoTopButton className={`${isShowBtn ? 'on' : ''}`} onClick={scrollToTop}>
         <AiFillCaretUp />
      </GoTopButton>
   );
});

export default GoTopBtn;
