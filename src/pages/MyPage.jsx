import React, { memo } from 'react';
import { InnerContainer, MyPageContainer, ParticleButton } from '../styled/GamilyStyle';

const MyPage = memo(() => {
   return (
      <MyPageContainer>
         <InnerContainer>
            <div className="profile">
               <img src="./images/profile_img1.jpg" alt="" />
               <p>
                  <span>정종우우종정종정정</span>
               </p>
               <div className="btn-area">
                  <ParticleButton>로그아웃</ParticleButton>
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
                     <li>
                        <button>
                           <i className="xi-close"></i>
                        </button>
                        <img src="./images/store/1.png" alt="" />
                        <p>네츄럴코어 에코 9a 시니어 오리&고구마 6kg</p>
                     </li>
                  </ul>
               </div>
               <div className="adoption-area">
                  <h3>관심있는 강아지</h3>
                  <ul>
                     <li>
                        <button>
                           <i className="xi-close"></i>
                        </button>
                        <img src="./images/profile_img2.jpg" alt="" />
                        <p>428357202300661</p>
                     </li>
                  </ul>
               </div>
            </div>
         </InnerContainer>
      </MyPageContainer>
   );
});

export default MyPage;
