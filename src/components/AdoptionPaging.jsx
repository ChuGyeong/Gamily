import React, { memo } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { PagingContainer } from '../styled/GamilyStyle';

const AdoptionPaging = memo(({ currentPageNum, setCurrentPageNum, data, itemsPerPage }) => {
   const totalPages = Math.ceil(data.length / itemsPerPage);
   const maxVisiblePages = 5;

   const maxPrev = () => {
      if (currentPageNum !== 1) setCurrentPageNum(1);
   };

   const prev = () => {
      if (currentPageNum > 1) setCurrentPageNum(currentPageNum - 1);
   };

   const maxNext = () => {
      if (currentPageNum !== totalPages) setCurrentPageNum(totalPages);
   };

   const next = () => {
      if (currentPageNum < totalPages) setCurrentPageNum(currentPageNum + 1);
   };

   const startPage = Math.max(1, currentPageNum - Math.floor(maxVisiblePages / 2));
   const endPage = Math.min(totalPages, currentPageNum + Math.floor(maxVisiblePages / 2));

   const pageArr = Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);

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
            {startPage > 1 && (
               <>
                  <li onClick={() => setCurrentPageNum(1)}>1</li>
                  <li>...</li>
               </>
            )}
            {pageArr.map(item => (
               <li
                  className={item === currentPageNum ? 'active' : ''}
                  key={item}
                  onClick={() => setCurrentPageNum(item)}>
                  {item}
               </li>
            ))}
            {endPage < totalPages && (
               <>
                  <li>...</li>
                  <li onClick={() => setCurrentPageNum(totalPages)}>{totalPages}</li>
               </>
            )}
         </ul>
         {currentPageNum !== totalPages && (
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
