import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LpContainer } from '../../styled/GamilyStyle';

const Lp = () => {
   const [bgSize, setBgSize] = useState(0);
   const [rotation, setRotation] = useState(0);
   const [top, setTop] = useState(0);
   const [ref, inView, entry] = useInView({
      threshold: 0,
   });

   const handleScroll = () => {
      if (!inView || !entry.target) return;
      // 1. 화면 중앙의 y좌표
      const centerY = window.innerHeight / 2;
      // 'inner' 요소의 y좌표
      const innerRect = entry.target.getBoundingClientRect();
      const innerY = innerRect.y + window.scrollY;
      // 'inner' 요소의 높이값
      const innerHeight = innerRect.height;
      // 현재 스크롤 값
      const currentScrollY = window.scrollY;

      // 좌표값안에 들어왔을때
      if (currentScrollY + centerY >= innerY && currentScrollY < innerY + innerHeight - centerY) {
         const newTop = currentScrollY - innerY + centerY;
         setTop(newTop);
         setBgSize(newTop * 2.2 + 150);
         setRotation(newTop / 2.5);
      }
   };

   useEffect(() => {
      if (inView) window.addEventListener('scroll', handleScroll);
      else window.removeEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [inView]);
   return (
      <LpContainer>
         <div className="inner" ref={ref}>
            <div
               className="lp"
               style={{
                  top: `${top}px`,
               }}>
               <div
                  className="bg"
                  style={{
                     transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                     width: bgSize,
                     height: bgSize,
                  }}>
                  <div className="core" style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}>
                     <span>Gamily</span>
                     <div className="center"></div>
                     <span>Gamily</span>
                  </div>
               </div>
               <div className="line line1"></div>
               <div className="line line2"></div>
               <div className="line line3"></div>
               <div className="line line4"></div>
            </div>
         </div>
      </LpContainer>
   );
};

export default Lp;
