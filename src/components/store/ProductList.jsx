import React from 'react';
import ProductItem from './ProductItem';
const ProductList = ({ currentData, option, setOption }) => {
   const { filter } = option;
   const changeSelect = e => {
      setOption({ ...option, filter: e.target.value });
   };
   return (
      <div className="product">
         <div className="select-area">
            <select value={filter} onChange={changeSelect}>
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
};

export default ProductList;
