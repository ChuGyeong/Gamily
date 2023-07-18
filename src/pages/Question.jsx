import React, { memo, useEffect, useState } from 'react';
import { getQuiz } from '../store/modules/quizSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { QuestionContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import Loading from '../components/Loading';
import AnswerSheet from '../components/quiz/AnswerSheet';
import Swal from 'sweetalert2';
import { addBadge } from '../store/modules/authSlice';

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
         const result = question.reduce((acc, cur) => (cur.answer === userAnswer[cur.id] ? acc + cur.score : acc), 0);
         if (result >= 60) {
            let badge = null;
            const badgeArr = [
               { id: 'basic1', img: '../images/ranking-basic-1.png' },
               { id: 'basic2', img: '../images/ranking-basic-2.png' },
               { id: 'basic3', img: '../images/ranking-basic-3.png' },
               { id: 'deepen1', img: '../images/ranking-deepen-1' },
               { id: 'deepen2', img: '../images/ranking-deepen-2' },
               { id: 'deepen3', img: '../images/ranking-deepen-3' },
               { id: 'prize', img: '../images/ranking-trophy.png' },
            ];
            if (questionId === 'basic' && result === 100) badge = badgeArr.find(item => item.id === 'basic3');
            else if (questionId === 'basic' && result >= 80) badge = badgeArr.find(item => item.id === 'basic2');
            else if (questionId === 'basic' && result >= 60) badge = badgeArr.find(item => item.id === 'basic1');
            else if (questionId === 'deepen' && result === 100) badge = badgeArr.find(item => item.id === 'deepen3');
            else if (questionId === 'deepen' && result >= 80) badge = badgeArr.find(item => item.id === 'deepen2');
            else if (questionId === 'deepen' && result >= 60) badge = badgeArr.find(item => item.id === 'deepen1');
            Swal.fire({
               imageUrl: badge.img,
               icon: 'success',
               title: `${result}점으로 합격입니다`,
               text: '축하드립니다',
            });
            dispatch(addBadge(badge));
         } else {
            Swal.fire({
               icon: 'error',
               title: `${result}점으로 불합격입니다`,
               text: '다음에 다시 도전 하세요',
            });
         }
      } else {
         Swal.fire({
            icon: 'error',
            title: `제출 실패`,
            text: '풀지 않은 문제가 있습니다',
         });
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
               {isSubmit ? (
                  <AnswerSheet question={question} userAnswer={userAnswer} />
               ) : (
                  <>
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
                  </>
               )}
            </InnerContainer>
         ) : (
            <Loading />
         )}
      </QuestionContainer>
   );
});

export default Question;
