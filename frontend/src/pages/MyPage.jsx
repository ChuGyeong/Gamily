import React, { memo, useEffect, useState } from 'react';
import { InnerContainer, MyPageContainer, ParticleButton } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMyAuth, logout } from '../store/modules/authSlice';
import Swal from 'sweetalert2';
import MyBadge from '../components/mypage/MyBadge';
import Basket from '../components/mypage/Basket';
import FavoritesDog from '../components/mypage/FavoritesDog';
import MyQnA from '../components/mypage/MyQnA';
import ProfileEdit from '../components/mypage/ProfileEdit';
import MyAdoptionApp from '../components/mypage/MyAdoptionApp';

const MyPage = memo(() => {
   const { auth, myAuth } = useSelector(state => state.authR);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleLogout = () => {
      dispatch(logout());
      Swal.fire({ icon: 'success', title: '로그아웃 성공' });
      navigate('/');
   };
   const [isEdit, setIsEdit] = useState(false);

   useEffect(() => {
      dispatch(getMyAuth(auth.id));
   }, []);

   return (
      <MyPageContainer>
         <InnerContainer>
            {isEdit && <ProfileEdit setIsEdit={setIsEdit} />}
            <div className="profile">
               <img src={myAuth.profileImg ? myAuth.profileImg : './images/profile.jpg'} alt="" />
               <p>
                  <span>{auth.username}</span>
               </p>
               <div className="btn-area">
                  <ParticleButton onClick={handleLogout}>로그아웃</ParticleButton>
                  <ParticleButton onClick={() => setIsEdit(true)}>회원정보수정</ParticleButton>
               </div>
            </div>
            <div className="container">
               <MyBadge />
               <MyQnA />
               <Basket />
               <FavoritesDog />
               <MyAdoptionApp />
            </div>
         </InnerContainer>
      </MyPageContainer>
   );
});

export default MyPage;
