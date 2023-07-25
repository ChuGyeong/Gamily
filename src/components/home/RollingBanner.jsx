import React, { memo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { RollingBannerContainer } from '../../styled/GamilyStyle';
import { Link } from 'react-router-dom';

const menuData = [
   { title: 'Knowledge', url: '/knowledge' },
   { title: 'Quiz', url: '/quiz' },
   { title: 'Adotion', url: '/adoption' },
   { title: 'Notice', url: '/notice' },
   { title: 'QnA', url: '/qna' },
   { title: 'Store', url: '/store' },
   { title: 'Knowledge', url: '/knowledge' },
   { title: 'Quiz', url: '/quiz' },
   { title: 'Adotion', url: '/adoption' },
   { title: 'Notice', url: '/notice' },
   { title: 'QnA', url: '/qna' },
   { title: 'Store', url: '/store' },
];
const RollingBanner = memo(() => {
   return (
      <RollingBannerContainer>
         <Swiper
            className="mySwiper"
            slidesPerView={5}
            autoplay={{
               delay: 0,
               disableOnInteraction: false,
            }}
            loop={true}
            speed={4000}
            allowTouchMove={false}
            modules={[Autoplay]}>
            {menuData.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <Link to={item.url}>{item.title}</Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </RollingBannerContainer>
   );
});

export default RollingBanner;
