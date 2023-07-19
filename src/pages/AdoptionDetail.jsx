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
   }, [adoptionId]);
   return (
      <>
         {state === 'fulfilled' ? (
            <InnerContainer>
               <AdoptionDetailContainer>
                  <div className="content-box">
                     <div className="desertionNo">
                        <p>{desertionNo}</p>
                     </div>
                     <div className="img-box">
                        <img src={popfile} alt={desertionNo} />
                     </div>
                     <div className="text-box top">
                        <p>
                           <span>접수일</span>
                           <span>{happenDt}</span>
                        </p>
                        <p>
                           <span>품종</span>
                           <span>{kindCd}</span>
                        </p>
                        <p>
                           <span>색상</span>
                           <span>{colorCd}</span>
                        </p>
                        <p>
                           <span>나이</span>
                           <span>{age}</span>
                        </p>
                        <p>
                           <span>체중</span>
                           <span>{weight}</span>
                        </p>
                        <p>
                           <span>공고번호</span>
                           <span>{noticeNo}</span>
                        </p>
                        <p>
                           <span>공고시작일/공고종료일</span>
                           <span>
                              {noticeSdt}/{noticeEdt}
                           </span>
                        </p>
                        <p>
                           <span>상태</span>
                           <span>{processState}</span>
                        </p>
                        <p>
                           <span>성별</span>
                           <span>{sexCd}</span>
                        </p>
                        <p>
                           <span>중성화여부</span>
                           <span>{neuterYn}</span>
                        </p>
                        <p>
                           <span>특징</span>
                           <span>{specialMark}</span>
                        </p>
                     </div>
                     <div className="text-box bottom">
                        <p>
                           <span>발견장소</span>
                           <span>{happenPlace}</span>
                        </p>
                        <p>
                           <span>보호소이름</span>
                           <span>{careNm}</span>
                        </p>
                        <p>
                           <span>보호소전화번호</span>
                           <span>{careTel}</span>
                        </p>
                        <p>
                           <span>보호장소</span>
                           <span>{careAddr}</span>
                        </p>
                        <p>
                           <span>관할기관</span>
                           <span>{orgNm}</span>
                        </p>
                        <p>
                           <span>담장자</span>
                           <span>{chargeNm}</span>
                        </p>
                        <p>
                           <span>담장자연락처</span>
                           <span>{officetel}</span>
                        </p>
                        <p>
                           <span>특이사항</span>
                           <span>{noticeComment}</span>
                        </p>
                     </div>
                     <div className="maps">
                        <img src="../images/maps.png" alt="" />
                     </div>
                  </div>
                  <div className="btn-box">
                     <button onClick={() => navigate('/adoption')}>목록으로</button>
                     <button onClick={() => navigate(`/myDogAdoption/${desertionNo}`)}>입양신청</button>
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
