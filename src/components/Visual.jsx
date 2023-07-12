import React, { memo, useEffect, useRef, useState } from 'react';
import { InnerContainer, VisualSection } from '../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Visual = memo(() => {
   const visualData = [
      { text: '엄마', bgImageUrl: './images/visual_0.jpg' },
      { text: '친구', bgImageUrl: './images/visual_1.jpg' },
      { text: '형제', bgImageUrl: './images/visual_2.jpg' },
      { text: '자매', bgImageUrl: './images/visual_3.jpg' },
   ];

   const [count, setCount] = useState(0);
   const interval = useRef();
   const [isBg, setIsBg] = useState(false);

   const swiperRef = useRef(null);

   useEffect(() => {
      let timerId;
      let intervalTime = 2000;
      const timer = () => {
         if (count < visualData.length - 1) {
            setCount(count + 1);
         } else {
            setCount(0);
         }
      };

      if (isBg) {
         clearInterval(timerId);
         swiperRef.current.swiper.autoplay.stop();
      } else {
         timerId = setInterval(timer, intervalTime);
         swiperRef.current.swiper.autoplay.start();
      }

      return () => {
         clearInterval(timerId);
      };
   }, [isBg, count]);

   const mouseOver = () => {
      setIsBg(true);
   };

   const mouseLeave = () => {
      setIsBg(false);
   };

   return (
      <VisualSection bgimg={isBg ? visualData[count].bgImageUrl : undefined}>
         <div className="bg"></div>
         <InnerContainer>
            <div className="text-area" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
               <h2>
                  저희의
                  <br />
                  <span>
                     <Swiper
                        ref={swiperRef}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
                           delay: 2000,
                           disableOnInteraction: true,
                        }}
                        touchRatio={0}
                        direction={'vertical'}
                        modules={[Autoplay]}>
                        {visualData.map(item => (
                           <SwiperSlide key={item.text}>{item.text}</SwiperSlide>
                        ))}
                     </Swiper>
                  </span>
                  가
                  <br />
                  되어주세요
               </h2>
            </div>
         </InnerContainer>
      </VisualSection>
   );
});

export default Visual;
