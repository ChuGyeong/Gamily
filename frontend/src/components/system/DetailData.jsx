import React, { memo } from 'react';
import { DetailDataContainer } from '../../styled/GamilyStyle';

const DetailData = memo(({ sliceName, detailItem }) => {
   const keys = Object.keys(detailItem);
   console.log(detailItem);
   return (
      <DetailDataContainer>
         <h3>{sliceName}</h3>
         <ul>
            {keys.map(item => (
               <li key={item}>
                  <strong>{item}</strong>
                  {Array.isArray(detailItem[item]) ? (
                     <>
                        {detailItem[item].map((item, idx) => (
                           <span key={idx}>{item}</span>
                        ))}
                     </>
                  ) : (
                     <em>{detailItem[item]}</em>
                  )}
               </li>
            ))}
         </ul>
      </DetailDataContainer>
   );
});

export default DetailData;
