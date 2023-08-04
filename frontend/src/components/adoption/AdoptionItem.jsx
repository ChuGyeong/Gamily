import React, { memo, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { ParticleButton } from '../../styled/GamilyStyle';
import useAuth from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavDogs } from '../../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

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
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { auth, checkAuth } = useAuth();
   const { myAuth } = useSelector(state => state.authR);
   const { favDogs } = myAuth;
   const handleLike = () => {
      if (!auth) checkAuth();
      else {
         dispatch(toggleFavDogs({ authID: auth.id, AdoptionItem: item }));
      }
   };
   return (
      <div className="masonry-item">
         <div className="img-box">
            <img src={popfile} alt={desertionNo} />
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
            <ParticleButton onClick={() => navigate(`/adoptiondetail/${desertionNo}`)}>상세정보</ParticleButton>
            <ParticleButton onClick={() => handleLike(desertionNo)}>
               {favDogs && favDogs.find(item => item.desertionNo === desertionNo) ? (
                  <AiFillHeart />
               ) : (
                  <AiOutlineHeart></AiOutlineHeart>
               )}
            </ParticleButton>
         </div>
      </div>
   );
});

export default AdoptionItem;
