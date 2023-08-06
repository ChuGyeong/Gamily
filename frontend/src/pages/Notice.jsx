import React, { memo } from 'react';
import { NoticeContainer, InnerContainer } from '../styled/GamilyStyle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Notice = memo(() => {
   const { auth } = useSelector(state => state.authR);
   const { data } = useSelector(state => state.noticeR);
   const navigate = useNavigate();
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
                  {data.map(item => (
                     <tr key={item.id}>
                        <td>{item.id}</td>
                        <td onClick={() => navigate(`/noticeDetail/${item.id}`)}>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.hits}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
            {auth?.isManager && (
               <div className="btn-area">
                  <button onClick={() => navigate('/noticeAdd')}>작성하기</button>
               </div>
            )}
         </InnerContainer>
      </NoticeContainer>
   );
});

export default Notice;
