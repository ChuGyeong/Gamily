import React, { memo, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import AdoptionFilterBox from './AdoptionFilterBox';

const AdoptionForm = memo(({ filter, setFilter, setCurrentPageNum }) => {
   const { varietyData } = useSelector(state => state.adoptionsR); // 사료 데이터 가져오기
   const [searchText, setSearchText] = useState('');
   const [focusedItemIndex, setFocusedItemIndex] = useState(-1);
   const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
   const [isFilterBoxOn, setIsFilterBoxOn] = useState(false);
   const isDataReady = varietyData && varietyData.length > 0;

   // 키보드 이벤트 처리
   const handleKeyPress = e => {
      const filteredItems = varietyData.filter(item => item.knm.includes(searchText));
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) e.preventDefault();
      if (e.key === 'ArrowDown') {
         setFocusedItemIndex(prevState =>
            prevState < Math.min(filteredItems.length - 1, 9) ? prevState + 1 : prevState,
         );
         setIsSuggestionsVisible(true);
      } else if (e.key === 'ArrowUp') {
         setFocusedItemIndex(prevState => (prevState > 0 ? prevState - 1 : prevState));
      } else if (e.key === 'Enter') {
         if (focusedItemIndex !== -1 && focusedItemIndex < filteredItems.length) {
            const selectedItem = filteredItems[focusedItemIndex];
            setSearchText(selectedItem.knm);
            setIsSuggestionsVisible(false);
            setIsFilterBoxOn(false);
            performSearch(selectedItem.knm);
         } else {
            performSearch(searchText);
            setIsSuggestionsVisible(false);
         }
      }
   };

   // 선택한 아이템 클릭 처리
   const handleItemClick = itemKnm => {
      setSearchText(itemKnm);
      setIsSuggestionsVisible(false);
      performSearch(itemKnm);
   };

   // 입력 값 변경 처리
   const changeInput = e => {
      const { value } = e.target;
      setSearchText(value);
      setFocusedItemIndex(-1);
      setIsSuggestionsVisible(true);
   };

   // 검색 실행 함수
   const performSearch = searchValue => {
      if (isDataReady) {
         const foundItem = varietyData.find(item => item.knm && item.knm === searchValue);
         if (foundItem) {
            setFilter({ ...filter, kindCd: foundItem.kindCd });
            setCurrentPageNum(1);
         } else {
            alert('잘못된 입력입니다');
         }
      } else {
         alert('데이터가 준비되지 않습니다. 잠시 후 다시 시도해주세요.');
      }
   };

   // 입력 폼 제출 처리
   const onSubmit = e => {
      if (e) e.preventDefault();
      performSearch(searchText);
      setIsSuggestionsVisible(false);
      setIsFilterBoxOn(false);
   };

   return (
      <form onSubmit={onSubmit}>
         <div className="search-box">
            <input
               type="text"
               placeholder="품종을 입력하세요(푸들)"
               name="searchText"
               onChange={changeInput}
               value={searchText}
               onKeyDown={handleKeyPress}
               onFocus={() => setIsSuggestionsVisible(true)}
               onBlur={() => setTimeout(() => setIsSuggestionsVisible(false), 100)}
            />
            <button type="submit">
               <AiOutlineSearch />
            </button>
            {searchText && isSuggestionsVisible && (
               <ul className="suggest-box">
                  {varietyData
                     .filter(item => item.knm.includes(searchText))
                     .splice(0, 10)
                     .map((item, index) => (
                        <li
                           key={item.kindCd}
                           className={index === focusedItemIndex ? 'focused' : ''}
                           onClick={() => handleItemClick(item.knm)}>
                           {item.knm}
                        </li>
                     ))}
               </ul>
            )}
         </div>

         {/* 필터 박스 렌더링 영역 */}
         <div className="filter-box">
            <button className="toggle-btn" type="button" onClick={() => setIsFilterBoxOn(!isFilterBoxOn)}>
               {isFilterBoxOn ? '접기' : '펼치기'}
            </button>

            <AdoptionFilterBox
               filter={filter}
               setFilter={setFilter}
               setCurrentPageNum={setCurrentPageNum}
               isFilterBoxOn={isFilterBoxOn}
            />
         </div>
      </form>
   );
});

export default AdoptionForm;
