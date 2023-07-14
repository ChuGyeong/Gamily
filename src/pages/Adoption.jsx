import React, { memo, useEffect, useState } from 'react';
import { AdoptionContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptions, getVarietyData } from '../store/modules/adoptionSlice';
import AdoptionList from '../components/AdoptionList';
import AdoptionForm from '../components/AdoptionForm';
import Loading from '../components/Loading';
import AdoptionPaging from '../components/AdoptionPaging';

const itemsPerPage = 12;

const Adoption = memo(() => {
   const { data, state } = useSelector(state => state.adoptionsR);
   const [filter, setFilter] = useState({
      kindCd: null,
   });
   const [currentPageNum, setCurrentPageNum] = useState(1);
   const startItemNum = itemsPerPage * (currentPageNum - 1);
   const endItemNum = itemsPerPage * currentPageNum;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAdoptions(filter));
      setCurrentPageNum(1);
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
                        <AdoptionList data={data.slice(startItemNum, endItemNum)} />
                        <AdoptionPaging
                           currentPageNum={currentPageNum}
                           filter={filter}
                           setCurrentPageNum={setCurrentPageNum}
                           data={data}
                           itemsPerPage={itemsPerPage}
                        />
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
