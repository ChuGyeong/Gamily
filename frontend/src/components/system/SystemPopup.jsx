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
   useEffect(() => {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
         const scrollY = document.body.style.top;
         document.body.style.cssText = '';
         window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
   }, []);

   const [isDetailData, setIsDetailData] = useState(false);

   const popupElement = document.querySelector('.popup');
   if (popupElement) {
      popupElement.scrollTop = 0;
   }
   return (
      <div className={`popup ${isDetailData ? 'on' : ''}`}>
         {!isDetailData ? (
            <button className="close" onClick={() => setIsPopUp(false)}>
               <i className="xi-close"></i>
            </button>
         ) : (
            <button className="close" onClick={() => setIsDetailData(false)}>
               <i className="xi-undo"></i>
            </button>
         )}
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
