import React, { memo } from 'react';
import TimeSale from '../components/store/TimeSale';
import { StoreContainer, InnerContainer } from '../styled/GamilyStyle';
import StoreMenu from '../components/store/StoreMenu';
import ProductList from '../components/store/ProductList';

const Store = memo(() => {
   return (
      <StoreContainer>
         <InnerContainer>
            <TimeSale />
            <StoreMenu />
            <ProductList />
         </InnerContainer>
      </StoreContainer>
   );
});

export default Store;
