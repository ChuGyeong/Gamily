import React, { memo, useState } from 'react';
import { SystemContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';

const System = memo(() => {
   const [isPopUp, setIsPopUp] = useState(false);
   return (
      <SystemContainer>
         <InnerContainer>
            <h2>Gamily Dashboard</h2>
            <div className="dashboard">
               <div className="main-graph">대충 큰 그래프 영역</div>
               <div className="data-summary-view">
                  <div className="result-display">
                     <div className="result">대충 작은 영역</div>
                     <div className="result">대충 작은 영역</div>
                     <div className="result">대충 작은 영역</div>
                  </div>
                  <div className="stats">작은 영역 결과물 합친 영역</div>
               </div>
            </div>
            <div className="page-controller">
               <ParticleButton>공지사항</ParticleButton>
               <ParticleButton>QnA</ParticleButton>
               <ParticleButton>유저정보</ParticleButton>
               <ParticleButton>Store</ParticleButton>
               <ParticleButton>입양신청서조회</ParticleButton>
            </div>
            {isPopUp && (
               <div className="bg">
                  <div className="popup">
                     <button className="close">
                        <i className="xi-close"></i>
                     </button>
                  </div>
               </div>
            )}
         </InnerContainer>
      </SystemContainer>
   );
});

export default System;
