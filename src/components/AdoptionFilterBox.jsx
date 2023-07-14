import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptions } from '../store/modules/adoptionSlice';
import { ParticleButton } from '../styled/GamilyStyle';

const AdoptionFilterBox = memo(({ filter, setFilter, setCurrentPageNum }) => {
   const { sexCd, minWeight, maxWeight, orgCd } = filter;
   const { orgData, orgDataState } = useSelector(state => state.adoptionsR);
   const dispatch = useDispatch();
   const handleFilter = e => {
      const { name, value } = e.target;
      setFilter({ ...filter, [name]: value });
   };
   const searchWithFilter = () => {
      dispatch(getAdoptions(filter));
      setCurrentPageNum(1);
   };
   return (
      <div className="filter-content">
         <p>
            <strong>성별</strong>
            <label>
               <input type="radio" name="sexCd" value="" checked={sexCd === ''} onChange={handleFilter} />
               전체
            </label>
            <label>
               <input type="radio" name="sexCd" value="M" checked={sexCd === 'M'} onChange={handleFilter} />남
            </label>
            <label>
               <input type="radio" name="sexCd" value="F" checked={sexCd === 'F'} onChange={handleFilter} />여
            </label>
            <label>
               <input type="radio" name="sexCd" value="Q" checked={sexCd === 'Q'} onChange={handleFilter} />
               미상
            </label>
         </p>
         <p>
            <strong>몸무게</strong>
            <label>
               <input type="number" name="minWeight" min={0} max={100} value={minWeight} onChange={handleFilter} />
               이상
            </label>
            <label>
               <input type="number" name="maxWeight" min={0} max={100} value={maxWeight} onChange={handleFilter} />
               이하
            </label>
         </p>
         <p>
            <strong>지역</strong>

            <label>
               <input type="radio" name="orgCd" value="" checked={orgCd === ''} onChange={handleFilter} />
               전체
            </label>
            {orgDataState === 'fulfilled' &&
               orgData.map(item => (
                  <label key={item.orgCd}>
                     <input
                        type="radio"
                        name="orgCd"
                        value={item.orgCd}
                        checked={orgCd === item.orgCd}
                        onChange={handleFilter}
                     />
                     {item.orgdownNm}
                  </label>
               ))}
         </p>
         <ParticleButton type="button" onClick={searchWithFilter}>
            조건으로 검색하기
         </ParticleButton>
      </div>
   );
});

export default AdoptionFilterBox;
