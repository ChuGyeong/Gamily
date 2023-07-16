import React, { memo, useEffect, useState } from 'react';
import { getQuiz } from '../store/modules/quizSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QuestionContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import Loading from '../components/Loading';
import AnswerSheet from '../components/quiz/AnswerSheet';

const Question = memo(() => {
   const { data, status } = useSelector(state => state.quizR);
   const dispatch = useDispatch();
   const { questionId } = useParams();
   const [question, setQuestion] = useState([]);
   const [userAnswer, setUserAnswer] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   const handleInput = e => {
      const { name, value } = e.target;
      setUserAnswer({ ...userAnswer, [name]: value });
   };
   const submit = () => {
      if (question.length === Object.keys(userAnswer).length) {
         setIsSubmit(true);
      } else {
         alert('풀지 않은 문제가 있습니다');
      }
   };
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
                  {question.map((item, idx) => (
                     <li key={idx}>
                        <p>
                           <span>{item.id}.</span>
                           <strong>{item.question}</strong>
                           <span>({item.score}점)</span>
                        </p>

                        {item.options.map((option, idx) => (
                           <label key={idx}>
                              <input
                                 type="radio"
                                 name={item.id}
                                 id={Object.keys(option)}
                                 value={Object.keys(option)[0]}
                                 checked={userAnswer[item.id] === Object.keys(option)[0]}
                                 onChange={handleInput}
                              />
                              {Object.values(option)}
                           </label>
                        ))}
                     </li>
                  ))}
               </ul>
               <ParticleButton onClick={submit}>정답 확인하기</ParticleButton>
               {isSubmit && <AnswerSheet question={question} userAnswer={userAnswer} />}
            </InnerContainer>
         ) : (
            <Loading />
         )}
      </QuestionContainer>
   );
});

export default Question;
