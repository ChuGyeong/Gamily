import React, { memo } from 'react';
import { NotFoundContainer } from '../styled/GamilyStyle';

const NotFound = memo(() => {
   return (
      <NotFoundContainer>
         <span>Page not found</span>
      </NotFoundContainer>
   );
});

export default NotFound;
