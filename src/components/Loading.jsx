import React, { memo } from 'react';
import { LoadingContainer } from '../styled/GamilyStyle';

const Loading = memo(() => {
   return (
      <LoadingContainer>
         <i className="xi-spinner-4 xi-spin"></i>
         <strong>
            Loading
            <span>.</span>
            <span>.</span>
            <span>.</span>
         </strong>
      </LoadingContainer>
   );
});

export default Loading;
