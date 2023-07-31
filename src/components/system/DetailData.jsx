import React, { memo } from 'react';
import { DetailDataContainer } from '../../styled/GamilyStyle';

const DetailData = memo(({ sliceName }) => {
   return (
      <DetailDataContainer>
         <h3>{sliceName}</h3>
      </DetailDataContainer>
   );
});

export default DetailData;
