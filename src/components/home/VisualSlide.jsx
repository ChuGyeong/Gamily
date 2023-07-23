import React, { memo, useEffect } from 'react';
import AOS from 'aos';

const VisualSlide = memo(() => {
   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <div data-aos="fade-down">
         <img src="./images/profile_img4.jpg" alt="" />
      </div>
   );
});

export default VisualSlide;
