import React, { memo } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { PagingContainer } from '../styled/GamilyStyle';

const pageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const AdoptionPaging = memo(({ currentPageNum, filter, setFilter }) => {
   const maxPrev = () => {
      if (currentPageNum !== 1) setFilter({ ...filter, currentPageNum: 1 });
   };
   const prev = () => {
      if (currentPageNum > 1) setFilter({ ...filter, currentPageNum: currentPageNum - 1 });
   };
   const maxNext = () => {
      if (!currentPageNum !== 10) setFilter({ ...filter, currentPageNum: 10 });
   };
   const next = () => {
      if (currentPageNum < 10) setFilter({ ...filter, currentPageNum: currentPageNum + 1 });
   };
   return (
      <PagingContainer>
         {currentPageNum !== 1 && (
            <>
               <button onClick={maxPrev}>
                  <i>
                     <BsFillCaretLeftFill />
                  </i>
                  <i>
                     <BsFillCaretLeftFill />
                  </i>
               </button>
               <button onClick={prev}>
                  <i>
                     <BsFillCaretLeftFill />
                  </i>
               </button>
            </>
         )}

         <ul>
            {pageArr.map(item => (
               <li
                  className={item === currentPageNum ? 'active' : ''}
                  key={item}
                  onClick={() => setFilter({ ...filter, currentPageNum: item })}>
                  {item}
               </li>
            ))}
         </ul>
         {currentPageNum !== 10 && (
            <>
               <button onClick={next}>
                  <i>
                     <BsFillCaretRightFill />
                  </i>
               </button>
               <button onClick={maxNext}>
                  <i>
                     <BsFillCaretRightFill />
                  </i>
                  <i>
                     <BsFillCaretRightFill />
                  </i>
               </button>
            </>
         )}
      </PagingContainer>
   );
});

export default AdoptionPaging;
