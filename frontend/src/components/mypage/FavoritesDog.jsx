import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleFavDogs } from '../../store/modules/authSlice';
import { ParticleButton, MyPageContent } from '../../styled/GamilyStyle';

const FavoritesDog = memo(() => {
   const { auth, myAuth } = useSelector(state => state.authR);
   const favDogs = (myAuth && myAuth.favDogs) || [];
   const dispatch = useDispatch();
   const navigate = useNavigate();
   return (
      <MyPageContent>
         <h3>관심있는 강아지</h3>
         <ul>
            {favDogs.length > 0 ? (
               favDogs.map(item => (
                  <li key={item.desertionNo}>
                     <button
                        onClick={() => dispatch(toggleFavDogs({ authID: auth.id, AdoptionItem: item }))}
                        className="close">
                        <i className="xi-close"></i>
                     </button>
                     <img
                        src={item.popfile}
                        alt={item.desertionNo}
                        onClick={() => navigate(`/adoptiondetail/${item.desertionNo}`)}
                     />
                     <p onClick={() => navigate(`/adoptiondetail/${item.desertionNo}`)} className="name">
                        {item.desertionNo}
                     </p>
                     <button className="app-form-btn" onClick={() => navigate(`/myDogAdoption/${item.desertionNo}`)}>
                        신청서작성
                     </button>
                  </li>
               ))
            ) : (
               <div className="not-list">
                  <p>데이터가 존재하지 않습니다.</p>
               </div>
            )}
         </ul>
      </MyPageContent>
   );
});

export default FavoritesDog;
