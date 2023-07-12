import React, { memo } from 'react';
import { InnerContainer, VisualSection } from '../styled/GamilyStyle';

const Visual = memo(() => {
   return (
      <VisualSection>
         <InnerContainer>
            <div className="text-area">
               <h2>
                  저희의
                  <br />
                  <span>가족</span>이
                  <br />
                  되어주세요
               </h2>
            </div>
         </InnerContainer>
      </VisualSection>
   );
});

export default Visual;
