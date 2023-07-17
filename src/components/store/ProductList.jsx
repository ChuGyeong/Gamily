import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/modules/storeSlice';
import ProductItem from './ProductItem';

const ProductList = memo(() => {
   const { data } = useSelector(state => state.storeR);
   const [currentData, setCurrentData] = useState(data || []);
   const [sort, setSort] = useState('');
   const dispatch = useDispatch();

   const changeSelect = e => {
      setSort(e.target.value);
      switch (e.target.value) {
         case 'name':
            setCurrentData([...currentData].sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0)));
            break;
         case 'lowPrice':
            setCurrentData([...currentData].sort((a, b) => a.price - b.price));
            break;
         case 'highPrice':
            setCurrentData([...currentData].sort((a, b) => b.price - a.price));
            break;
         default:
            setCurrentData([...currentData].sort((a, b) => a.id - b.id));
      }
   };
   useEffect(() => {
      dispatch(getProduct());
   }, []);
   useEffect(() => {
      setCurrentData(data);
   }, [data]);
   return (
      <div className="product">
         <div className="select-area">
            <select value={sort} onChange={changeSelect}>
               <option value="">정렬</option>
               <option value="name">이름순</option>
               <option value="highPrice">높은가격순</option>
               <option value="lowPrice">낮은가격순</option>
            </select>
         </div>
         <ul className="product-list">
            {currentData.map(item => (
               <ProductItem key={item.id} item={item} />
            ))}
         </ul>
      </div>
   );
});

export default ProductList;
