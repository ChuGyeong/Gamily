import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/modules/storeSlice';
import ProductItem from './ProductItem';

const ProductList = memo(() => {
   const { data } = useSelector(state => state.storeR);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProduct());
   }, []);

   return (
      <div className="product">
         <div className="select-area">
            <select>
               <option value="">정렬</option>
               <option value="name">이름순</option>
               <option value="lowPrice">높은가격순</option>
               <option value="highPrice">낮은가격순</option>
            </select>
         </div>
         <ul className="product-list">
            {data.map(item => (
               <ProductItem key={item.id} item={item} />
            ))}
         </ul>
      </div>
   );
});

export default ProductList;
