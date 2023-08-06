import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserBadgeContent } from '../../styled/GamilyStyle';
import { getBadgeData, getMyBadge } from '../../store/modules/badgeSlice';

const Badge = memo(() => {
   const { auth, myAuth } = useSelector(state => state.authR);
   const { badgeData, myBadge } = useSelector(state => state.badgeR);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getBadgeData());
      dispatch(getMyBadge(auth.email));
   }, []);
   return (
      <UserBadgeContent>
         <h3>획득한 뱃지</h3>
         <ul>
            {badgeData && badgeData.length > 0 && myBadge && myBadge.length > 0 ? (
               myBadge.map(item => (
                  <li key={item.badgeID}>
                     <img
                        src={badgeData.find(badgeDataItem => badgeDataItem.id === item.badgeID).img}
                        alt={badgeData.find(badgeDataItem => badgeDataItem.id === item.badgeID).name}
                     />
                     <p className="name">{badgeData.find(badgeDataItem => badgeDataItem.id === item.badgeID).name}</p>
                  </li>
               ))
            ) : (
               <div className="not-list">
                  <p>데이터가 존재하지 않습니다.</p>
               </div>
            )}
         </ul>
      </UserBadgeContent>
   );
});

export default Badge;
