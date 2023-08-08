import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AnswerQnAContainer, InnerContainer, ParticleButton } from '../../styled/GamilyStyle';

const AnswerQnA = memo(() => {
   const { data } = useSelector(state => state.qnaR);
   const navigate = useNavigate();
   const { qnaAnswerId } = useParams();

   const qna = data.find(item => item.id === parseInt(qnaAnswerId));

   return (
      <AnswerQnAContainer>
         <InnerContainer>
            <div className="question-area">
               <h3>{qna.title}</h3>
               <p>{qna.question}</p>
            </div>
            <form>
               <input type="text" />
               <div className="btn-area">
                  <ParticleButton>확인</ParticleButton>
                  <ParticleButton onClick={() => navigate(-1)}>취소</ParticleButton>
               </div>
            </form>
         </InnerContainer>
      </AnswerQnAContainer>
   );
});

export default AnswerQnA;
