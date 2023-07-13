import React, { memo, useEffect, useState } from 'react';
import { AdoptionContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptions, getVarietyData } from '../store/modules/adoptionSlice';
import AdoptionList from '../components/AdoptionList';
import AdoptionForm from '../components/AdoptionForm';
import Loading from '../components/Loading';
import AdoptionPaging from '../components/AdoptionPaging';

const Adoption = memo(() => {
   const { data, state } = useSelector(state => state.adoptionsR);
   const [filter, setFilter] = useState({
      currentPageNum: 1,
      kindCd: null,
   });
   const { currentPageNum } = filter;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAdoptions(filter));
   }, [filter]);
   useEffect(() => {
      dispatch(getVarietyData());
   }, []);
   return (
      <AdoptionContainer>
         <InnerContainer>
            <h2>Adoption</h2>
            <AdoptionForm filter={filter} setFilter={setFilter} />
            {state === 'fulfilled' ? (
               <>
                  {data && data.length > 0 ? (
                     <>
                        <AdoptionList data={data} />
                        <AdoptionPaging currentPageNum={currentPageNum} filter={filter} setFilter={setFilter} />
                     </>
                  ) : (
                     <p>조회 결과가 없습니다</p>
                  )}
               </>
            ) : (
               <Loading />
            )}
         </InnerContainer>
      </AdoptionContainer>
   );
});

export default Adoption;
