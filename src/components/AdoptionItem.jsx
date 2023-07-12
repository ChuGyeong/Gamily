import React, { memo } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
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
            <span>#{sexCd === 'M' ? '남아' : '여아'}</span>
            <span>#{colorCd}</span>
            <span>#{careNm}</span>
         </div>
         <div className="btn-box">
            <button>상세정보</button>
            <button>
               <AiOutlineHeart></AiOutlineHeart>
            </button>
         </div>
      </div>
   );
});

export default AdoptionItem;
