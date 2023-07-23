import React, { memo, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VisualSlideContainer } from '../../styled/GamilyStyle';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const VisualSlide = memo(() => {
   const resultDivRef = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   const toKorChars = str => {
      const CHOSUNG_LIST = [
         'ㄱ',
         'ㄲ',
         'ㄴ',
         'ㄷ',
         'ㄸ',
         'ㄹ',
         'ㅁ',
         'ㅂ',
         'ㅃ',
         'ㅅ',
         'ㅆ',
         'ㅇ',
         'ㅈ',
         'ㅉ',
         'ㅊ',
         'ㅋ',
         'ㅌ',
         'ㅍ',
         'ㅎ',
      ];
      const JUNGSUNG_LIST = [
         'ㅏ',
         'ㅐ',
         'ㅑ',
         'ㅒ',
         'ㅓ',
         'ㅔ',
         'ㅕ',
         'ㅖ',
         'ㅗ',
         'ㅘ',
         'ㅙ',
         'ㅚ',
         'ㅛ',
         'ㅜ',
         'ㅝ',
         'ㅞ',
         'ㅟ',
         'ㅠ',
         'ㅡ',
         'ㅢ',
         'ㅣ',
      ];
      const JONGSUNG_LIST = [
         '',
         'ㄱ',
         'ㄲ',
         'ㄳ',
         'ㄴ',
         'ㄵ',
         'ㄶ',
         'ㄷ',
         'ㄹ',
         'ㄺ',
         'ㄻ',
         'ㄼ',
         'ㄽ',
         'ㄾ',
         'ㄿ',
         'ㅀ',
         'ㅁ',
         'ㅂ',
         'ㅄ',
         'ㅅ',
         'ㅆ',
         'ㅇ',
         'ㅈ',
         'ㅊ',
         'ㅋ',
         'ㅌ',
         'ㅍ',
         'ㅎ',
      ];

      const ga = 44032;
      const hih = 55203;

      const kor_chars = [];
      for (let i = 0; i < str.length; i++) {
         const char_code = str.charCodeAt(i);

         if (char_code < ga || char_code > hih) {
            kor_chars.push(str[i]);
         } else {
            const uni_value = char_code - ga;
            const chosung_index = parseInt(uni_value / (21 * 28));
            const jungsung_index = parseInt((uni_value % (21 * 28)) / 28);
            const jongsung_index = (uni_value % (21 * 28)) % 28;

            kor_chars.push(CHOSUNG_LIST[chosung_index]);
            kor_chars.push(JUNGSUNG_LIST[jungsung_index]);

            if (jongsung_index !== 0) {
               kor_chars.push(JONGSUNG_LIST[jongsung_index]);
            }
         }
      }

      return kor_chars;
   };

   const typeing1 = [];
   const result = '유기견과 함께 하는 일상 속에 행복과 감동을 느껴보세요.';
   const splitResult = result.split('');

   for (let i = 0; i < splitResult.length; i++) {
      typeing1[i] = toKorChars(splitResult[i]);
   }

   useEffect(() => {
      const onScroll = () => {
         if (resultDivRef.current) {
            const rect = resultDivRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const offset = 100;
            const isVisibleNow = rect.top < windowHeight - offset;

            if (!isVisible && isVisibleNow) {
               setIsVisible(true);
            } else if (isVisible && !isVisibleNow) {
               setIsVisible(false);
            }
         }
      };

      window.addEventListener('scroll', onScroll);

      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, [isVisible]);

   useEffect(() => {
      let text = '';
      let i = 0;
      let j = 0;
      const imax = typeing1.length;
      let timer;

      const typi = () => {
         if (i < imax) {
            if (j <= typeing1[i].length) {
               resultDivRef.current.innerHTML = result.substr(0, i) + text;
               text = typeof typeing1[i] === 'string' ? typeing1[i].substr(0, j) : typeing1[i][j - 1] || '';

               j++;
            } else {
               text = '';
               j = 0;
               i++;
            }
         } else {
            clearInterval(timer);
         }
      };

      const startTimer = () => {
         timer = setInterval(typi, 50);
      };

      const stopTimer = () => {
         clearInterval(timer);
      };

      const resetTimer = () => {
         clearInterval(timer);
         i = 0;
         text = '';
         if (resultDivRef.current) {
            resultDivRef.current.innerHTML = '';
         }
      };

      if (isVisible) {
         startTimer();
      } else {
         stopTimer();
         resetTimer();
      }

      return () => {
         clearInterval(timer);
      };
   }, [typeing1, isVisible]);

   return (
      <VisualSlideContainer>
         <div className="text-area">
            <div id="text" ref={resultDivRef}></div>
         </div>
         <div className="img-area">
            <>
               <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  loop={true}
                  className="mySwiper">
                  <SwiperSlide>
                     <img src="./images/visual_slides_1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_3.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_4.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_5.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_6.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_7.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_8.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_9.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="./images/visual_slides_10.jpg" alt="" />
                  </SwiperSlide>
               </Swiper>
            </>
         </div>
      </VisualSlideContainer>
   );
});

export default VisualSlide;
