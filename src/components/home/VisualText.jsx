import React, { useState, useEffect, memo, useRef } from 'react';
import { VisualTextContainer } from '../../styled/GamilyStyle';

const VisualText = memo(() => {
   /*
    if (scrollStandard >= $bucheonNowContent.offsetTop && bucheonNowIsPlayed === false) {
    $bucheonNowRollingBox.querySelectorAll("li").forEach(item => {
      let startNum = 999;
      let goalNum = parseInt(item.dataset.num);
      let currentNum = parseInt(item.children[1].textContent);
      let speed = 30;
      let step = Math.ceil(Math.abs(startNum - goalNum) / 50);
      let timer = setInterval(() => {
        if (startNum <= goalNum) {
          clearInterval(timer);
          item.children[1].textContent = goalNum;
        } else {
          startNum -= step;
          if (startNum < goalNum) {
            startNum = goalNum;
          }
          item.children[1].textContent = startNum;
        }
      }, speed);
    });
    bucheonNowIsPlayed = true;
  } */

   const [num, setNum] = useState(0);
   return (
      <VisualTextContainer>
         <div className="text-area">
            <p>
               <span>2022년 발생한 유기동물</span>
               <strong>{'112226'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
            </p>
         </div>
      </VisualTextContainer>
   );
});

export default VisualText;
