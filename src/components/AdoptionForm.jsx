import React, { memo, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptions } from '../store/modules/adoptionSlice';

const AdoptionForm = memo(({ filter, setFilter }) => {
   const [search, setSearch] = useState({
      searchText: '',
   });
   const { searchText } = search;
   const [isFilterBoxOn, setIsFilterBoxOn] = useState(false);
   const { varietyData, varietyDataSate } = useSelector(state => state.adoptionsR);
   const dispatch = useDispatch();

   const changeInput = e => {
      const { name, value } = e.target;
      setSearch({ ...filter, [name]: value });
   };

   const onSubmit = e => {
      e.preventDefault();
      if (varietyDataSate === 'fulfilled') {
         try {
            const kindCd = varietyData.find(item => item.knm.includes(searchText)).kindCd;
            setFilter({ ...filter, kindCd });
         } catch {
            console.log('잘못입력');
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
            />
            <button>
               <AiOutlineSearch />
            </button>
         </div>
         <div className="filter-box">
            <div>
               <label htmlFor=""></label>
               <input type="radio" name="" id="" />
            </div>
         </div>
      </form>
   );
});

export default AdoptionForm;
