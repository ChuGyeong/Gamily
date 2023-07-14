import React, { memo } from 'react';
import { QuizContainer, InnerContainer } from '../styled/GamilyStyle';
import { useNavigate } from 'react-router-dom';

const Quiz = memo(() => {
   const navigate = useNavigate();
   return (
      <QuizContainer>
         <InnerContainer>
            <div className="text-area">
               <h3>
                  {'Gamily Quiz'.split('').map((item, idx) => (
                     <span key={idx}>{item}</span>
                  ))}
               </h3>
               <ul>
                  <li>
                     강아지를 키우는 사람을 포함해 강아지 외 반려동물을 키우는 사람, 랜선 집사, 잠재적 보호자, 척척박사,
                     잘 아는 것 같은 느낌이 있는 자 등이 응시할 수 있습니다.
                  </li>
                  <li>
                     심화 퀴즈는 문항에 따라 배점이 따르니 각 물음의 끝에 표시된 배점을 참고하세요. 배점은 6점 또는
                     7점입니다.
                  </li>
                  <li>본 퀴즈를 풀어 뱃지를 획득하세요.</li>
               </ul>
            </div>
            <div className="img-area"></div>
            <div className="contents">
               <div className="basic">
                  <p>기본영역</p>
                  <button onClick={() => navigate(`/question/basic`)}>퀴즈 풀러가기</button>
               </div>
               <div className="deepen">
                  <p>심화영역</p>
                  <button onClick={() => navigate(`/question/deepen`)}>퀴즈 풀러가기</button>
               </div>
            </div>
         </InnerContainer>
      </QuizContainer>
   );
});

export default Quiz;
