import React, { memo, useState } from 'react';
import { InfoBubbleContainer } from '../styled/GamilyStyle';
import { AiOutlineClose } from 'react-icons/ai';
import useDate from '../hooks/useDate';

const InfoBubble = memo(() => {
   const today = useDate();
   const [isShowBubble, setIsShowBubble] = useState(localStorage.getItem('isBubble') === today ? false : true || true);
   const notWatchOneDay = () => {
      localStorage.setItem('isBubble', today);
      setIsShowBubble(false);
   };
   return (
      <InfoBubbleContainer className={isShowBubble ? 'on' : ''}>
         <p>강아지 입양이 처음이신가요?</p>
         <span onClick={notWatchOneDay}>하루동안 보지 않기</span>
         <button onClick={() => setIsShowBubble(false)}>
            <AiOutlineClose />
         </button>
      </InfoBubbleContainer>
   );
});

export default InfoBubble;
