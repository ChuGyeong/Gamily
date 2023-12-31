import React, { memo, useEffect, useState } from 'react';
import { InfoBubbleContainer } from '../../styled/GamilyStyle';
import { AiOutlineClose } from 'react-icons/ai';
import useDate from '../../hooks/useDate';
import { Link } from 'react-router-dom';

const InfoBubble = memo(() => {
   const today = useDate();
   const [isShowBubble, setIsShowBubble] = useState(true);
   const notWatchOneDay = () => {
      localStorage.setItem('isBubble', today);
      setIsShowBubble(false);
   };
   useEffect(() => {
      setIsShowBubble(localStorage.getItem('isBubble') !== today);
   }, [today]);
   return (
      <InfoBubbleContainer className={isShowBubble ? 'on' : ''}>
         <p>
            <Link to={'/knowledge'}>강아지 입양이 처음이신가요?</Link>
         </p>
         <span onClick={notWatchOneDay}>하루동안 보지 않기</span>
         <button onClick={() => setIsShowBubble(false)}>
            <AiOutlineClose />
         </button>
      </InfoBubbleContainer>
   );
});

export default InfoBubble;
