import React, { memo, useEffect, useState } from 'react';
import { SystemContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/modules/storeSlice';
import SystemPopup from '../components/system/SystemPopup';

const System = memo(() => {
   const { data: qnaData } = useSelector(state => state.qnaR);
   const { data: noticeData } = useSelector(state => state.noticeR);
   const { authData } = useSelector(state => state.authR);
   const { data: storeData } = useSelector(state => state.storeR);
   const { data: adoptionAppData } = useSelector(state => state.adoptionAppR);
   const dispatch = useDispatch();
   const [data, setData] = useState([]);
   const [isPopUp, setIsPopUp] = useState(false);
   const [sliceName, setSliceName] = useState(null);

   useEffect(() => {
      dispatch(getProduct());
   }, []);

   const onShow = sliceName => {
      setSliceName(sliceName);
      switch (sliceName) {
         case 'notice':
            setData(noticeData);
            break;
         case 'qna':
            setData(qnaData);
            break;
         case 'auth':
            setData(authData);
            break;
         case 'store':
            setData(storeData);
            break;
         case 'adoptionApp':
            setData(adoptionAppData);
            break;
         default:
            setData([]);
      }
      setIsPopUp(true);
   };

   return (
      <SystemContainer>
         <InnerContainer>
            <h2>Gamily Dashboard</h2>
            <div className="page-controller">
               <ParticleButton onClick={() => onShow('notice')}>공지사항</ParticleButton>
               <ParticleButton onClick={() => onShow('qna')}>QnA</ParticleButton>
               <ParticleButton onClick={() => onShow('auth')}>유저정보</ParticleButton>
               <ParticleButton onClick={() => onShow('store')}>Store</ParticleButton>
               <ParticleButton onClick={() => onShow('adoptionApp')}>입양신청서조회</ParticleButton>
            </div>
            <div className="dashboard">
               <div className="main-graph">대충 큰 그래프 영역</div>
               <div className="data-summary-view">
                  <div className="result-display">
                     <div className="result">
                        <span>새로운문의글</span>
                        <p>0</p>
                     </div>
                     <div className="result">
                        <span>입양횟수</span>
                        <p>0</p>
                     </div>
                     <div className="result">
                        <span>상품판매수량</span>
                        <p>5</p>
                     </div>
                  </div>
                  <div className="stats">작은 영역</div>
               </div>
            </div>
            {isPopUp && (
               <div className="bg">
                  <SystemPopup setIsPopUp={setIsPopUp} data={data} sliceName={sliceName} />
               </div>
            )}
         </InnerContainer>
      </SystemContainer>
   );
});

export default System;
