import React, { memo } from 'react';

const StoreMenu = memo(() => {
   const menus = ['사료', '간식', '건강관리', '장난감'];

   return (
      <ul className="category">
         <li>ALL</li>
         {menus.map((item, idx) => (
            <li key={idx}>{item}</li>
         ))}
      </ul>
   );
});

export default StoreMenu;
