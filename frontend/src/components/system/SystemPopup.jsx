import React, { memo, useEffect, useState } from 'react';
import SearchBox from './SearchBox';

const cateArr = ['조회', '추가'];

const SystemPopup = memo(({ setIsPopUp, data, sliceName }) => {
   const [cate, setCate] = useState('조회');
   const selCate = item => {
      setCate(item);
   };
   const clearCate = () => {
      setCate('조회');
   };
   console.log(data, sliceName);

   const [isDetailData, setIsDetailData] = useState(false);

   return (
      <div className={`popup ${isDetailData ? 'on' : ''}`}>
         <div className="data-area">
            <div className="btn-area">
               {sliceName !== 'qna' ? (
                  cateArr.map(item => (
                     <button key={item} className={cate === item ? 'on' : ''} onClick={() => selCate(item)}>
                        {item}
                     </button>
                  ))
               ) : (
                  <button className="on">조회</button>
               )}
            </div>
            <div className="content">
               {cate === '조회' && (
                  <SearchBox
                     sliceName={sliceName}
                     data={data}
                     isDetailData={isDetailData}
                     setIsDetailData={setIsDetailData}
                  />
               )}
            </div>
         </div>
      </div>
   );
});

export default SystemPopup;
