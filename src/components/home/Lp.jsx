import React, { memo } from 'react';
import { LpContainer } from '../../styled/GamilyStyle';

const Lp = memo(() => {
   return (
      <LpContainer>
         <div className="core">
            <span>Gamily</span>
            <div className="center"></div>
            <span>Gamily</span>
         </div>
         <div className="bg"></div>
      </LpContainer>
   );
});

export default Lp;
