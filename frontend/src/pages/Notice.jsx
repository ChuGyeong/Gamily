import React, { memo, useEffect } from 'react';
import { NoticeContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getNoticeData, increaseHitsNotice } from '../store/modules/noticeSlice';
import { getMyAuth } from '../store/modules/authSlice';

const Notice = memo(() => {
   const { auth, myAuth } = useSelector(state => state.authR);
   const { noticeData } = useSelector(state => state.noticeR);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const goNoticeDetail = item => {
      navigate(`/noticeDetail/${item.id}`);
      dispatch(increaseHitsNotice({ noticeItemID: item.id }));
   };

   useEffect(() => {
      dispatch(getNoticeData());
   }, []);
   useEffect(() => {
      dispatch(getMyAuth({ authEmail: auth.email }));
   }, [auth]);

   return (
      <NoticeContainer>
         <InnerContainer>
            <h2>공지사항</h2>
            <table>
               <colgroup>
                  <col className="wid1" />
                  <col className="wid2" />
                  <col className="wid3" />
                  <col className="wid4" />
               </colgroup>
               <thead>
                  <tr>
                     <th>번호</th>
                     <th>제목</th>
                     <th>작성일</th>
                     <th>조회수</th>
                  </tr>
               </thead>
               <tbody>
                  {noticeData.map(item => (
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td onClick={() => goNoticeDetail(item)}>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.hits}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
            {myAuth?.isManager && (
               <div className="btn-area">
                  <button onClick={() => navigate('/noticeAdd')}>작성하기</button>
               </div>
            )}
         </InnerContainer>
      </NoticeContainer>
   );
});

export default Notice;
