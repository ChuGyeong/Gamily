import React, { memo, useEffect, useState } from 'react';
import { SystemContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/modules/storeSlice';
import SystemPopup from '../components/system/SystemPopup';
import Barchart from '../components/system/Barchart';
import Piechart from '../components/system/Piechart';
import Calendarchart from '../components/system/Calendarchart';

const System = memo(() => {
   let tempData = [
      { id: 'cola', value: 324 },
      { id: 'cidar', value: 88 },
      { id: 'fanta', value: 221 },
   ];

   let tempData1 = [
      { id: '사료', value: 1 },
      { id: '간식', value: 2 },
      { id: '건강관리', value: 1 },
      { id: '장난감', value: 1 },
   ];

   let tempData2 = [
      { id: 'basic', value: 13 },
      { id: 'deepen', value: 20 },
      { id: 'trophy', value: 3 },
   ];

   let calendarData = [
      {
         value: 1,
         day: '2022-12-30',
      },
      {
         value: 2,
         day: '2022-12-08',
      },
      {
         value: 3,
         day: '2022-06-21',
      },
      {
         value: 5,
         day: '2023-10-24',
      },
      {
         value: 7,
         day: '2022-09-22',
      },
      {
         value: 10,
         day: '2023-04-24',
      },
      {
         value: 50,
         day: '2022-08-01',
      },
      {
         value: 3,
         day: '2023-02-03',
      },
      {
         value: 20,
         day: '2022-12-13',
      },
   ];

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
            <div className="dashboard">
               {' '}
               <div className="data-summary-view">
                  <div className="result-display">
                     <div className="result">
                        <Piechart tempData={tempData} />
                     </div>
                     <div className="result">
                        <Piechart tempData={tempData1} />
                     </div>
                     <div className="result">
                        <Piechart tempData={tempData2} />
                     </div>
                  </div>
                  <div className="stats">
                     <Calendarchart tempData={calendarData} />
                  </div>
               </div>
               <div className="main-graph">
                  <Barchart />
               </div>
            </div>
            <div className="page-controller">
               <ParticleButton onClick={() => onShow('notice')}>공지사항</ParticleButton>
               <ParticleButton onClick={() => onShow('qna')}>QnA</ParticleButton>
               <ParticleButton onClick={() => onShow('auth')}>유저정보</ParticleButton>
               <ParticleButton onClick={() => onShow('store')}>Store</ParticleButton>
               <ParticleButton onClick={() => onShow('adoptionApp')}>입양신청서조회</ParticleButton>
            </div>
            {isPopUp && <SystemPopup setIsPopUp={setIsPopUp} data={data} sliceName={sliceName} />}
         </InnerContainer>
      </SystemContainer>
   );
});

export default System;
