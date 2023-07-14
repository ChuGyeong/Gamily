import React, { memo } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { ParticleButton } from '../styled/GamilyStyle';

const AdoptionItem = memo(({ item }) => {
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
   } = item;
   return (
      <div className="masonry-item">
         <div className="img-box">
            <img src={popfile} alt="" />
         </div>
         <div className="text-box">
            <span>#{age}</span>
            <span>#{kindCd.replace('[개] ', '')}</span>
            <span>#{weight}</span>
            <span>#{sexCd === 'M' ? '남아' : sexCd === 'F' ? '여아' : '미상'}</span>
            <span>#{colorCd}</span>
            <span>#{careNm}</span>
         </div>
         <div className="btn-box">
            <ParticleButton>상세정보</ParticleButton>
            <ParticleButton>
               <AiOutlineHeart></AiOutlineHeart>
            </ParticleButton>
         </div>
      </div>
   );
});

export default AdoptionItem;
