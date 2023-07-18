import React, { memo } from 'react';
import { UserQnAContent, ParticleButton } from '../../styled/GamilyStyle';

const MyQnA = memo(() => {
   return (
      <UserQnAContent>
         <h3>질문 목록</h3>
         <ul>
            <li>
               <p>
                  <strong>QnA 제목</strong>
                  <span>답변이 없습니다.</span>
               </p>
               <div className="btn-area">
                  <ParticleButton>수정</ParticleButton>
                  <ParticleButton>삭제</ParticleButton>
               </div>
            </li>
         </ul>
      </UserQnAContent>
   );
});

export default MyQnA;
