import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../store/modules/storeSlice';

const StoreMenu = memo(() => {
   const menus = ['사료', '간식', '건강관리', '장난감'];
   const dispatch = useDispatch();
   return (
      <ul className="category">
         <li onClick={() => dispatch(getProduct())}>ALL</li>
         {menus.map((item, idx) => (
            <li key={idx} onClick={() => dispatch(getProduct(item))}>
               {item}
            </li>
         ))}
      </ul>
   );
});

export default StoreMenu;
