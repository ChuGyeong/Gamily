import React, { memo } from 'react';
import { DetailDataContainer } from '../../styled/GamilyStyle';

const DetailData = memo(({ sliceName, detailItem, setIsDetailData }) => {
   const keys = Object.keys(detailItem);
   console.log(detailItem);
   return (
      <DetailDataContainer>
         <div className="bg">
            <div className="content">
               <button className="close" onClick={() => setIsDetailData(false)}>
                  <i className="xi-refresh"></i>
               </button>
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
            </div>
         </div>
      </DetailDataContainer>
   );
});

export default DetailData;
