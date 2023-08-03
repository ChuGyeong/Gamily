import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ParticleButton, MyPageContent } from '../../styled/GamilyStyle';
import { delAdoptionApp } from '../../store/modules/adoptionAppSlice';

const MyAdoptionApp = memo(() => {
   const { data } = useSelector(state => state.adoptionAppR);
   const { auth } = useSelector(state => state.authR);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   return (
      <MyPageContent>
         <h3>나의 입양신청서</h3>
         <ul>
            {data.length > 0 ? (
               data
                  .filter(item => item.email === auth.email)
                  .map(item => (
                     <li key={item.desertionNo}>
                        <button onClick={() => dispatch(delAdoptionApp(item.id))} className="close">
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
