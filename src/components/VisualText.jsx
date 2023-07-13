import React, { useState, useEffect, memo, useRef } from 'react';
import { VisualTextContainer } from '../styled/GamilyStyle';

const VisualText = memo(() => {
   const [yPosition, setYPosition] = useState(0);
   const visualTextRef = useRef(null);
   const [scrollPosition, setScrollPosition] = useState(0);

   useEffect(() => {
      if (visualTextRef.current) {
         const rect = visualTextRef.current.getBoundingClientRect();
         setYPosition(rect.y);
      }
   }, []);

   const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const txt = '당신은 좋은 가족이 될 준비가 되셨나요?';
   const [Text, setText] = useState('');
   const [Count, setCount] = useState(0);

   useEffect(() => {
      if (scrollPosition > 0) {
         const interval = setInterval(() => {
            setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
            setCount(Count + 1); // 개수 만큼 체크
         }, 100);
         if (Count === txt.length) {
            // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
         }
         return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
      }
   });

   return (
      <>
         <VisualTextContainer ref={visualTextRef}>
            <p className="text">{Text}</p>
         </VisualTextContainer>
      </>
   );
});

export default VisualText;
