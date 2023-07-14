import React, { memo, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import AdoptionFilterBox from './AdoptionFilterBox';

const AdoptionForm = memo(({ filter, setFilter, setCurrentPageNum }) => {
   const [search, setSearch] = useState({
      searchText: '',
   });
   const { searchText } = search;
   const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
   const [focusedItemIndex, setFocusedItemIndex] = useState(-1);
   const { varietyData, varietyDataSate } = useSelector(state => state.adoptionsR);
   const [isFilterBoxOn, setIsFilterBoxOn] = useState(false);

   const handleKeyPress = e => {
      const filteredItems = varietyData.filter(item => item.knm.includes(searchText));

      // Handle arrow down
      if (e.key === 'ArrowDown') {
         e.preventDefault();
         setFocusedItemIndex(prevState => (prevState < filteredItems.length - 1 ? prevState + 1 : prevState));
      }

      // Handle arrow up
      if (e.key === 'ArrowUp') {
         e.preventDefault();
         setFocusedItemIndex(prevState => (prevState > 0 ? prevState - 1 : prevState));
      }

      // Handle enter key
      if (e.key === 'Enter' && focusedItemIndex !== -1) {
         e.preventDefault();
         const selectedItem = filteredItems[focusedItemIndex];
         setSearch({ ...search, searchText: selectedItem.knm });
         setIsSuggestionsVisible(false);
      }
   };

   const changeInput = e => {
      const { name, value } = e.target;
      setSearch({ ...search, [name]: value });
      setFocusedItemIndex(-1);
   };

   const onSubmit = e => {
      e.preventDefault();
      if (varietyDataSate === 'fulfilled') {
         try {
            const kindCd = varietyData.find(item => item.knm === searchText).kindCd;
            if (kindCd) {
               setFilter({ ...filter, kindCd });
            }
         } catch {
            alert('잘못된 입력입니다');
         }
      }
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
               onFocus={() => setIsSuggestionsVisible(true)}
               onBlur={() => setTimeout(() => setIsSuggestionsVisible(false), 100)}
               onKeyDown={handleKeyPress}
            />
            <button>
               <AiOutlineSearch />
            </button>
            {isSuggestionsVisible && searchText && (
               <ul className="suggest-box">
                  {varietyData
                     .filter(item => item.knm.includes(searchText))
                     .splice(0, 10)
                     .map((item, index) => (
                        <li
                           key={item.kindCd}
                           className={index === focusedItemIndex ? 'focused' : ''}
                           onClick={() => setSearch({ ...search, searchText: item.knm })}>
                           {item.knm}
                        </li>
                     ))}
               </ul>
            )}
         </div>

         <div className="filter-box">
            <button className="toggle-btn" type="button" onClick={() => setIsFilterBoxOn(!isFilterBoxOn)}>
               {isFilterBoxOn ? '접기' : '펼치기'}
            </button>
            {isFilterBoxOn && (
               <AdoptionFilterBox filter={filter} setFilter={setFilter} setCurrentPageNum={setCurrentPageNum} />
            )}
         </div>
      </form>
   );
});

export default AdoptionForm;
