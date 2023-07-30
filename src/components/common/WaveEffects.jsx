import React, { memo } from 'react';
import { WaveEffect } from '../../styled/GamilyStyle';

const WaveEffects = memo(({ top = 0, left = 0, isAdd = false }) => {
   return (
      <WaveEffect top={`${top}`} left={`${left}`}>
         <div className="wave one"></div>
         <div className="wave two"></div>
         <div className="wave three"></div>
         {isAdd && <div className="wave four"></div>}
      </WaveEffect>
   );
});

export default WaveEffects;
