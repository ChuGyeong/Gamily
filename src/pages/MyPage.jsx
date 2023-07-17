import React, { memo } from 'react';
import { InnerContainer, MyPageContainer, ParticleButton } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addInCart, logout, toggleFavDogs } from '../store/modules/authSlice';
import Swal from 'sweetalert2';

const MyPage = memo(() => {
   const { auth, authData } = useSelector(state => state.authR);
   const { favDogs, cart } = (auth && authData.find(item => item.email === auth.email)) || { favDogs: [], cart: [] };
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleLogout = () => {
      dispatch(logout());
      Swal.fire({ icon: 'success', title: '로그아웃 성공' });
      navigate('/');
   };

   return (
      <MyPageContainer>
         <InnerContainer>
            <div className="profile">
               <img src="./images/profile_img1.jpg" alt="" />
               <p>
                  <span>정종우우종정종정정</span>
               </p>
               <div className="btn-area">
                  <ParticleButton onClick={handleLogout}>로그아웃</ParticleButton>
                  <ParticleButton>회원정보수정</ParticleButton>
               </div>
            </div>
            <div className="content">
               <div className="badge-area">
                  <h3>획득한 뱃지</h3>
               </div>
               <div className="basket-area">
                  <h3>찜한 상품</h3>
                  <ul>
                     {/* <li>
                        <button>
                           <i className="xi-close"></i>
                        </button>
                        <img src="./images/store/1.png" alt="" />
                        <p>네츄럴코어 에코 9a 시니어 오리&고구마 6kg</p>
                     </li> */}
                     {cart.map(item => (
                        <li key={item.id}>
                           <button onClick={() => dispatch(addInCart(item))}>
                              <i className="xi-close"></i>
                           </button>
                           <img
                              src={item.image}
                              alt={item.description}
                              onClick={() => navigate(`/product/${item.id}`)}
                           />
                           <p onClick={() => navigate(`/product/${item.id}`)}>{item.description}</p>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="adoption-area">
                  <h3>관심있는 강아지</h3>
                  <ul>
                     {favDogs.map(item => (
                        <li key={item.desertionNo}>
                           <button onClick={() => dispatch(toggleFavDogs(item))}>
                              <i className="xi-close"></i>
                           </button>
                           <img
                              src={item.popfile}
                              alt={item.desertionNo}
                              onClick={() => navigate(`/adoptiondetail/${item.desertionNo}`)}
                           />
                           <p onClick={() => navigate(`/adoptiondetail/${item.desertionNo}`)}>{item.desertionNo}</p>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </InnerContainer>
      </MyPageContainer>
   );
});

export default MyPage;
