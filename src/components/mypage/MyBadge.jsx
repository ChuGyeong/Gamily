import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { UserBadgeContent } from '../../styled/GamilyStyle';

const Badge = memo(() => {
   const { auth, authData } = useSelector(state => state.authR);
   const { badge } = (auth && authData.find(item => item.email === auth.email)) || {
      badge: [],
   };

   return (
      <UserBadgeContent>
         <h3>획득한 뱃지</h3>
         <ul>
            {badge.map(item => (
               <li key={item.id}>
                  <img src={item.img} alt={item.id} />
                  <p className="name">{item.id}</p>
               </li>
            ))}
         </ul>
      </UserBadgeContent>
   );
});

export default Badge;
