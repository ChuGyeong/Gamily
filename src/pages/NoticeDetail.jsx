import React, { memo } from 'react';
import { NoticeDetailContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useNavigate } from 'react-router-dom';

const NoticeDetail = memo(() => {
   const navigate = useNavigate();

   return (
      <NoticeDetailContainer>
         <InnerContainer>
            <div className="notice-view">
               <div className="tit-area">
                  <span>공지사항</span>
                  <p>공지사항을 오픈하였습니다.</p>
                  <span>2023.07.16</span>
               </div>
               <div className="text-area">
                  <p>
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                     게시글 내용입니다. <br />
                  </p>
               </div>
            </div>
            <div className="btn-area">
               <ParticleButton>이전</ParticleButton>
               <ParticleButton onClick={() => navigate('/notice')}>목록</ParticleButton>
               <ParticleButton>다음</ParticleButton>
            </div>
         </InnerContainer>
      </NoticeDetailContainer>
   );
});

export default NoticeDetail;
