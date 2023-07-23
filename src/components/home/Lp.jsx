import React, { memo, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { LpContainer } from '../../styled/GamilyStyle';

const Lp = memo(() => {
   const [bgSize, setBgSize] = useState(300);
   const [rotation, setRotation] = useState(0);
   const [ref, inView] = useInView({ threshold: 0.3 });
   const isSticky = inView;

   const handleWheel = e => {
      if (!isSticky) return;

      const rotationAmount = e.deltaY / 15;

      if (e.deltaY < 0 && bgSize >= 300) {
         setBgSize(size => size - 200);
      } else if (e.deltaY > 0 && bgSize <= 200 * 16) {
         setBgSize(size => size + 200);
      }

      setRotation(deg => deg + rotationAmount);
   };

   useEffect(() => {
      window.addEventListener('wheel', handleWheel);

      return () => {
         window.removeEventListener('wheel', handleWheel);
      };
   }, [isSticky]);

   return (
      <LpContainer>
         <div className="inner" ref={ref}>
            <div className={`lp ${isSticky ? 'isSticky' : ''}`}>
               <div
                  className="bg"
                  style={{
                     width: `${bgSize}px`,
                     height: `${bgSize}px`,
                     transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                  }}>
                  <div className="core">
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
});

export default Lp;
