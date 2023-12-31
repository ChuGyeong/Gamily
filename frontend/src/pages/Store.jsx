import React, { memo, useEffect, useState } from 'react';
import TimeSale from '../components/store/TimeSale';
import { StoreContainer, InnerContainer } from '../styled/GamilyStyle';
import StoreMenu from '../components/store/StoreMenu';
import ProductList from '../components/store/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreData } from '../store/modules/storeSlice';

const Store = memo(() => {
   const dispatch = useDispatch();
   const { storeData } = useSelector(state => state.storeR);
   const [currentData, setCurrentData] = useState([]);
   const [option, setOption] = useState({
      category: '',
      filter: '',
   });
   useEffect(() => {
      dispatch(getStoreData());
   }, []);
   useEffect(() => {
      setCurrentData(storeData);
   }, [storeData]);
   useEffect(() => {
      const { category, filter } = option;
      let current = [...storeData];
      if (category) {
         if (category === 'ALL') current = [...storeData];
         else current = [...storeData].filter(item => item.category === category);
      }
      if (filter) {
         switch (filter) {
            case 'name':
               current = current.sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0));
               break;
            case 'lowPrice':
               current = current.sort((a, b) => a.price - b.price);
               break;
            case 'highPrice':
               current = current.sort((a, b) => b.price - a.price);
               break;
            default:
               current = current.sort((a, b) => a.id - b.id);
         }
      }
      setCurrentData(current);
   }, [option]);
   return (
      <StoreContainer>
         <InnerContainer>
            <TimeSale />
            <StoreMenu option={option} setOption={setOption} />
            <ProductList currentData={currentData} option={option} setOption={setOption} />
         </InnerContainer>
      </StoreContainer>
   );
});

export default Store;
