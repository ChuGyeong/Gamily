import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AnswerQnAContainer, InnerContainer, ParticleButton } from '../../styled/GamilyStyle';
import { addAnswer } from '../../store/modules/qnaSlice';
import Swal from 'sweetalert2';

const AnswerQnA = memo(() => {
   const { qnaData } = useSelector(state => state.qnaR);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { qnaAnswerId } = useParams();
   const [answer, setAnswer] = useState('');
   const qna = qnaData.find(item => item.id === parseInt(qnaAnswerId));

   const handleSubmit = e => {
      e.preventDefault();
      dispatch(addAnswer({ questionID: qna.id, answer }));
      Swal.fire('작업 완료', '답변 작성을 완료했습니다', 'success');
      navigate(-1);
   };
   return (
      <AnswerQnAContainer>
         <InnerContainer>
            <div className="question-area">
               <h3>{qna.title}</h3>
               <p>{qna.question}</p>
            </div>
            <form onSubmit={handleSubmit}>
               <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
               <div className="btn-area">
                  <ParticleButton>확인</ParticleButton>
                  <ParticleButton type="button" onClick={() => navigate(-1)}>
                     취소
                  </ParticleButton>
               </div>
            </form>
         </InnerContainer>
      </AnswerQnAContainer>
   );
});

export default AnswerQnA;
