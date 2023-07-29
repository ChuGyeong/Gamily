import React, { memo, useRef } from 'react';
import { MenuCrossContainer } from '../../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsBookHalf } from 'react-icons/bs';
import { FaDog } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import { AiFillNotification } from 'react-icons/ai';
import { TbMessageQuestion } from 'react-icons/tb';

const menuData1 = [
   {
      title: 'Knowledge',
      desc: '강아지에 관한 알차고 다양한 지식을 공유하는 공간으로,\n강아지 보호와 관리 방법,\n좋은 보호자가 되기 위한 마음가짐 등 유용한 정보들을 얻을 수 있어요.',
      icon: <BsBookHalf />,
      url: '/',
   },
   {
      title: 'Quiz',
      desc: '유기견의 세계를 더욱 재미있게 알아가는 코너!\n다양한 퀴즈로 지식을 테스트하고 올바른 정보를 습득할 수 있습니다.\n퀴즈를 풀어 다양한 뱃지를 획득해보세요!',
      icon: <MdQuiz />,
      url: '/',
   },
   {
      title: 'Adoption',
      desc: '세상의 소중한 생명, 유기견들을 소개하는 공간입니다.\n행복한 가정을 찾아갈 수 있도록 도와주세요.\n슬기롭고 사랑 가득한 삶을 살게 해주실 분을 찾고 있어요.',
      icon: <FaDog />,
      url: '/',
   },
];
const menuData2 = [
   {
      title: 'Notice',
      desc: '홈페이지와 관련한 중요한 이벤트, 공지사항 등을 소개하는 페이지입니다.\n신속하게 알려드리겠습니다.',
      icon: <AiFillNotification />,
      url: '/',
   },
   {
      title: 'QnA',
      desc: '유기견, 동물보호, 홈페이지 이용 방법 등에 대해 궁금한 점을 언제든지 물어볼 수 있는 질문 답변 게시판입니다.',
      icon: <TbMessageQuestion />,
      url: '/',
   },
   {
      title: 'Store',
      desc: '우리 강아지와 함께 좀 더 건강하고 행복한 삶을 위한 다양한 상품들을 판매 중입니다!\n필요한 강아지 용품들을 편리하게 이용하세요.',
      icon: <BsFillCartFill />,
      url: '/',
   },
];

const MenuCross = memo(() => {
   const swiperRef = useRef(null);

   const handleMouseEnter = () => {
      swiperRef.current.swiper.autoplay.stop();
   };

   const handleMouseLeave = () => {
      swiperRef.current.swiper.autoplay.start();
   };

   return (
      <MenuCrossContainer>
         <Swiper
            className="topSwiper mySwiper"
            slidesPerView={2}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={swiperRef}
            loop={true}
            modules={[Autoplay]}>
            {menuData1.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <div className="text-box">
                     <Link to={item.url}>{item.title}</Link>
                     <p>
                        {item.desc.split('\n').map(line => (
                           <span key={line}>
                              {line}
                              <br />
                           </span>
                        ))}
                     </p>
                  </div>
                  <div className="icon-box">{item.icon}</div>
               </SwiperSlide>
            ))}
         </Swiper>
         <Swiper
            className="bottomSwiper mySwiper"
            slidesPerView={2}
            direction={'horizontal'}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
               reverseDirection: true, // 추가된 속성
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={swiperRef}
            loop={true}
            modules={[Autoplay]}>
            {menuData2.map((item, idx) => (
               <SwiperSlide key={idx}>
                  <div className="icon-box">{item.icon}</div>
                  <div className="text-box">
                     <Link to={item.url}>{item.title}</Link>
                     <p>
                        {item.desc.split('\n').map(line => (
                           <span key={line}>
                              {line}
                              <br />
                           </span>
                        ))}
                     </p>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </MenuCrossContainer>
   );
});

export default MenuCross;
