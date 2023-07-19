import React, { useState, useEffect, memo, useRef } from 'react';
import { VisualTextContainer } from '../../styled/GamilyStyle';

const VisualText = memo(() => {
   const [currentNum, setCurrentNum] = useState(0);
   const numRef = useRef();
   const [isNum, setIsNum] = useState(false);

   useEffect(() => {
      animateNumbers();
   }, []);

   const animateNumbers = () => {
      let startNum = 0;
      let goalNum = 112226;
      let speed = 100;
      let step = Math.ceil(Math.abs(startNum - goalNum) / 50);
      let timer = setInterval(() => {
         if (startNum >= goalNum) {
            clearInterval(timer);
            setCurrentNum(goalNum);
         } else {
            startNum += step;
            if (startNum > goalNum) {
               startNum = goalNum;
               setIsNum(true);
            }
            setCurrentNum(startNum);
         }
      }, speed);
   };

   return (
      <VisualTextContainer>
         <div className={`text-area ${isNum ? 'on' : ''}`}>
            <p>
               <span>2022년 발생한 유기동물</span>
               <strong ref={numRef}>{currentNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
            </p>
         </div>
      </VisualTextContainer>
   );
});

export default VisualText;
