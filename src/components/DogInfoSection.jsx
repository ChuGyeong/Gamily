import React, { memo } from 'react';
import { InnerContainer, VisualKnowContainer } from '../styled/GamilyStyle';

const DogInfoSection = memo(() => {
   return (
      <VisualKnowContainer>
         <InnerContainer>
            <div>
               <span data-tooltip="퀴즈를 풀어서 뱃지를 획득해보세요!">
                  <img src="./images/ranking-ribbon.png" alt="" />
               </span>
            </div>
         </InnerContainer>
      </VisualKnowContainer>
   );
});

export default DogInfoSection;
