import React, { memo } from 'react';

const StoreMenu = memo(({ option, setOption }) => {
   const menus = ['사료', '간식', '건강관리', '장난감'];
   const handleFilter = item => {
      setOption({ ...option, category: item });
   };
   return (
      <ul className="category">
         <li onClick={() => handleFilter('ALL')}>ALL</li>
         {menus.map((item, idx) => (
            <li key={idx} onClick={() => handleFilter(item)}>
               {item}
            </li>
         ))}
      </ul>
   );
});

export default StoreMenu;
