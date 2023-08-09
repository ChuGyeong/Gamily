import React, { memo, useEffect, useState } from 'react';
import { NoticeDetailContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeData } from '../store/modules/noticeSlice';

const NoticeDetail = memo(() => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { noticeData } = useSelector(state => state.noticeR);
   const { noticeId } = useParams();
   const [currentNotice, setCurrentNotice] = useState({ title: '', data: '', content: '' });

   useEffect(() => {
      if (!noticeData) dispatch(getNoticeData);
      setCurrentNotice(noticeData.find(item => item.id === Number(noticeId)));
   }, [noticeId]);
   return (
      <NoticeDetailContainer>
         <InnerContainer>
            {currentNotice && (
               <div className="notice-view">
                  <div className="tit-area">
                     <span>공지사항</span>
                     <p>{currentNotice.title}</p>
                     <span>{currentNotice.date}</span>
                  </div>
                  <div className="text-area">
                     <p>
                        {currentNotice.content.split('\n').map(line => (
                           <span key={line}>
                              {line}
                              <br />
                              <br />
                           </span>
                        ))}
                     </p>
                  </div>
               </div>
            )}

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
