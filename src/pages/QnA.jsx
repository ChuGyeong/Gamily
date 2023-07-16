import React, { memo } from 'react';
import { NoticeContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
const QnA = memo(() => {
   return (
      <NoticeContainer>
         <InnerContainer>
            <h2>QnA</h2>
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
                     <td>QnA입니다.</td>
                     <td>2023.07.16</td>
                     <td>5</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td>QnA입니다.</td>
                     <td>2023.07.16</td>
                     <td>20</td>
                  </tr>
                  <tr>
                     <td>1</td>
                     <td>QnA입니다.</td>
                     <td>2023.07.16</td>
                     <td>1</td>
                  </tr>
               </tbody>
            </table>
            <div className="btn-area">
               <button>글 작성</button>
            </div>
         </InnerContainer>
      </NoticeContainer>
   );
});

export default QnA;
