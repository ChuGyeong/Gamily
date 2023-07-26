import React, { memo } from 'react';
import { MenuCrossContainer } from '../../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';

const menuData1 = [
   { title: '어쩌구', img: '../images/profile_img1.jpg', url: '/' },
   { title: '어쩌구', img: '../images/profile_img2.jpg', url: '/' },
   { title: '어쩌구', img: '../images/profile_img3.jpg', url: '/' },
   { title: '어쩌구', img: '../images/profile_img4.jpg', url: '/' },
];
const menuData2 = [
   { title: '어쩌구', img: '../images/profile_img1.jpg', url: '/package.json' },
   { title: '어쩌구', img: '../images/profile_img2.jpg', url: '/package.json' },
   { title: '어쩌구', img: '../images/profile_img3.jpg', url: '/package.json' },
   { title: '어쩌구', img: '../images/profile_img4.jpg', url: '/package.json' },
];
const MenuCross = memo(() => {
   return (
      <MenuCrossContainer>
         <Swiper
            className="topSwiper"
            slidesPerView={2}
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}>
            {menuData1.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <div className="img-box">
                     <img src={item.img} alt={item.title} />
                  </div>
                  <div className="title-box">
                     <Link to={item.url}>{item.title}</Link>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <Swiper
            className="bottomSwiper"
            slidesPerView={2}
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}>
            {menuData2.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <div className="img-box">
                     <img src={item.img} alt={item.title} />
                  </div>
                  <div className="title-box">
                     <Link to={item.url}>{item.title}</Link>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </MenuCrossContainer>
   );
});

export default MenuCross;
