import React, { memo, useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MenuSlideContainer } from '../../styled/GamilyStyle';
import { Link } from 'react-router-dom';

const MenuSlide = memo(() => {
   const picsRefs = useRef(
      Array(5)
         .fill()
         .map(() => React.createRef()),
   );

   useEffect(() => {
      const handleMouseMove = e => {
         picsRefs.current.forEach((picRef, idx) => {
            const pic = picRef.current;
            if (pic) {
               const startPosition = [
                  { x: 200, y: 100, step: 110 },
                  { x: 120, y: 600, step: 90 },
                  { x: 1370, y: 50, step: 180 },
                  { x: 1450, y: 350, step: 130 },
                  { x: 1170, y: 600, step: 70 },
               ];

               const x = startPosition[idx].x + (e.clientX * 5) / startPosition[idx].step + 'px';
               const y = startPosition[idx].y + (e.clientY * 8) / startPosition[idx].step + 'px';
               pic.style.left = x;
               pic.style.top = y;
            }
         });
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <MenuSlideContainer>
         <div className="bgImg">
            {picsRefs.current.map((picRef, idx) => (
               <div key={idx} ref={picRef} className={`pic${idx + 1}`}></div>
            ))}
         </div>
         <div className="menus">
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               loop={true}
               modules={[Autoplay, Pagination, Navigation]}
               className="mySwiper">
               <SwiperSlide>
                  <Link to={'/knowledge'}>Knowledge</Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to={'/quiz'}>Quiz</Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to={'/adoption'}>Adoption</Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to={'/notice'}>Notice</Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to={'/qna'}>QnA</Link>
               </SwiperSlide>
               <SwiperSlide>
                  <Link to={'/store'}>Store</Link>
               </SwiperSlide>
            </Swiper>
         </div>
      </MenuSlideContainer>
   );
});

export default MenuSlide;
