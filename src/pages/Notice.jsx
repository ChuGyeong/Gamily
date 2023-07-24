import React, { memo } from 'react';
import { NoticeContainer, InnerContainer } from '../styled/GamilyStyle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Notice = memo(() => {
   const { auth } = useSelector(state => state.authR);
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
                  <tr>
                     <td>1</td>
                     <td onClick={() => navigate(`/noticeDetail/1`)}>공지사항을 오픈하였습니다.</td>
                     <td>2023.07.16</td>
                     <td>5</td>
                  </tr>
               </tbody>
            </table>
            {auth?.isManager && (
               <div className="btn-area">
                  <button>작성하기</button>
               </div>
            )}
         </InnerContainer>
      </NoticeContainer>
   );
});

export default Notice;
