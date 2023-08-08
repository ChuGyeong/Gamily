import React, { memo, useEffect, useState } from 'react';
import { AdoptionContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptions, getOrgData, getVarietyData } from '../store/modules/adoptionSlice';
import AdoptionList from '../components/adoption/AdoptionList';
import AdoptionForm from '../components/adoption/AdoptionForm';
import Loading from '../components/common/Loading';
import AdoptionPaging from '../components/adoption/AdoptionPaging';
import { getMyAuth } from '../store/modules/authSlice';

const itemsPerPage = 12;

const Adoption = memo(() => {
   const { auth } = useSelector(state => state.authR);
   const { data, state } = useSelector(state => state.adoptionsR);
   const [filter, setFilter] = useState({
      kindCd: null,
      sexCd: '',
      minWeight: 0,
      maxWeight: 100,
      orgCd: '',
   });
   const [currentPageNum, setCurrentPageNum] = useState(1);
   const startItemNum = itemsPerPage * (currentPageNum - 1);
   const endItemNum = itemsPerPage * currentPageNum;
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAdoptions(filter));
      setCurrentPageNum(1);
   }, [filter.kindCd]);
   useEffect(() => {
      dispatch(getVarietyData());
      dispatch(getOrgData());
      if (auth) {
         dispatch(getMyAuth({ authEmail: auth.email }));
      }
   }, []);
   return (
      <AdoptionContainer>
         <InnerContainer>
            <h2>Adoption</h2>
            <AdoptionForm filter={filter} setFilter={setFilter} setCurrentPageNum={setCurrentPageNum} />
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
                     <div className="info-box">조회 결과가 없습니다</div>
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
