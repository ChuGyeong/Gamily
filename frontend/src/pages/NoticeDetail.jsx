import React, { memo } from 'react';
import { NoticeDetailContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NoticeDetail = memo(() => {
   const navigate = useNavigate();
   const { data } = useSelector(state => state.noticeR);
   const { noticeId } = useParams();
   const notice = data.find(item => item.id === Number(noticeId));

   return (
      <NoticeDetailContainer>
         <InnerContainer>
            <div className="notice-view">
               <div className="tit-area">
                  <span>공지사항</span>
                  <p>{notice.title}</p>
                  <span>{notice.date}</span>
               </div>
               <div className="text-area">
                  <p>
                     {notice.content.split('\n').map(line => (
                        <span key={line}>
                           {line}
                           <br />
                           <br />
                        </span>
                     ))}
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
