import React, { memo, useEffect, useState } from 'react';
import { getQuiz } from '../store/modules/quizSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QuestionContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import Loading from '../components/Loading';

const Question = memo(() => {
   const { data, status } = useSelector(state => state.quizR);
   const { questionId } = useParams();
   const [question, setQuestion] = useState([]);

   console.log(data[questionId]);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuiz());
   }, []);

   useEffect(() => {
      if (status === 'fulfilled') {
         setQuestion(data[questionId]);
      }
   }, [data, status]);

   return (
      <QuestionContainer>
         {status === 'fulfilled' ? (
            <InnerContainer>
               {questionId === 'deepen' ? <h2>심화영역</h2> : <h2>기본영역</h2>}
               <ul>
                  {question.map(item => (
                     <li key={item.question}>
                        <p>
                           <span>{item.id}.</span>
                           <strong>{item.question}</strong>
                           <span>({item.score}점)</span>
                        </p>
                        <label>
                           {item.options.map((option, idx) => (
                              <>
                                 <input key={item.id} type="radio" name={item.id} id={Object.keys(option)} />
                                 <span>{Object.values(option)}</span>
                              </>
                           ))}
                        </label>
                     </li>
                  ))}
               </ul>
               <ParticleButton>정답 확인하기</ParticleButton>
            </InnerContainer>
         ) : (
            <Loading />
         )}
      </QuestionContainer>
   );
});

export default Question;
