import React, { memo, useEffect, useRef, useState } from 'react';
import { InnerContainer, VisualSection } from '../../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Visual1 = memo(() => {
   const visualData = [{ text: '엄마' }, { text: '친구' }, { text: '형제' }, { text: '자매' }];

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
      <VisualSection>
         <div className="bg"></div>
         <InnerContainer>
            <h2 onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
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
         </InnerContainer>
      </VisualSection>
   );
});

export default Visual1;
