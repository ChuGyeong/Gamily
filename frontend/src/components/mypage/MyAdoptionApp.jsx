import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ParticleButton, MyPageContent } from '../../styled/GamilyStyle';
import { delAdoptionApp, getMyAdoptionApp } from '../../store/modules/adoptionAppSlice';

const MyAdoptionApp = memo(() => {
   const { myAdoptionApp } = useSelector(state => state.adoptionAppR);
   const { auth } = useSelector(state => state.authR);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleDeleteAdoptionApp = item => {
      dispatch(delAdoptionApp(item.id));
      setTimeout(() => {
         dispatch(getMyAdoptionApp(auth.email));
      }, 100);
   };
   useEffect(() => {
      dispatch(getMyAdoptionApp(auth.email));
   }, []);
   return (
      <MyPageContent>
         <h3>나의 입양신청서</h3>
         <ul>
            {myAdoptionApp.length > 0 ? (
               myAdoptionApp
                  .filter(item => item.email === auth.email)
                  .map(item => (
                     <li key={item.desertionNo}>
                        <button onClick={() => handleDeleteAdoptionApp(item)} className="close">
                           <i className="xi-close"></i>
                        </button>
                        <img
                           src={item.profileImg}
                           alt={item.desertionNo}
                           onClick={() => navigate(`/adoptiondetail/${item.desertionNo}`)}
                        />
                        <p onClick={() => navigate(`/adoptiondetail/${item.desertionNo}`)} className="name">
                           {item.desertionNo}
                        </p>
                        <p>{item.state}</p>
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

export default MyAdoptionApp;
