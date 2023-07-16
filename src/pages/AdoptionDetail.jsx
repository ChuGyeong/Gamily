import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdoptions } from '../store/modules/adoptionSlice';
import Loading from '../components/Loading';
import { AdoptionDetailContainer, InnerContainer } from '../styled/GamilyStyle';

const AdoptionDetail = memo(() => {
   const { adoptionId } = useParams();
   const { data, state } = useSelector(state => state.adoptionsR);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const {
      desertionNo,
      happenDt,
      happenPlace,
      kindCd,
      colorCd,
      age,
      weight,
      noticeNo,
      noticeSdt,
      noticeEdt,
      popfile,
      sexCd,
      neuterYn,
      specialMark,
      careNm,
      processState,
      careTel,
      careAddr,
      orgNm,
      chargeNm,
      officetel,
      noticeComment,
   } = data;

   useEffect(() => {
      dispatch(getAdoptions({ adoptionId }));
      console.log('getAdoptions');
   }, [adoptionId]);
   return (
      <>
         {state === 'fulfilled' ? (
            <InnerContainer>
               <AdoptionDetailContainer>
                  <div className="content-box">
                     <div className="img-box">
                        <img src={popfile} alt={desertionNo} />
                     </div>
                     <div className="text-box">
                        <span>유기번호 : {desertionNo}</span>
                        <span>접수일 : {happenDt}</span>
                        <span>발견장소 : {happenPlace}</span>
                        <span>품종 : {kindCd}</span>
                        <span>색상 : {colorCd}</span>
                        <span>나이 : {age}</span>
                        <span>체중 : {weight}</span>
                        <span>공고번호 : {noticeNo}</span>
                        <span>공고시작일 : {noticeSdt}</span>
                        <span>공고종료일 : {noticeEdt}</span>
                        <span>상태 : {processState}</span>
                        <span>성별 : {sexCd}</span>
                        <span>중성화여부 : {neuterYn}</span>
                        <span>특징 : {specialMark}</span>
                        <span>보호소이름 : {careNm}</span>
                        <span>보호소전화번호 : {careTel}</span>
                        <span>보호장소 : {careAddr}</span>
                        <span>관할기관 : {orgNm}</span>
                        <span>담장자 : {chargeNm}</span>
                        <span>담장자연락처 : {officetel}</span>
                        <span>특이사항 : {noticeComment}</span>
                     </div>
                  </div>
                  <div className="btn-box">
                     <button onClick={() => navigate('/adoption')}>목록으로</button>
                     <button>입양신청</button>
                  </div>
               </AdoptionDetailContainer>
            </InnerContainer>
         ) : (
            <Loading />
         )}
      </>
   );
});

export default AdoptionDetail;
