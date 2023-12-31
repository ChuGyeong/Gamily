import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnswerSheetContainer, ParticleButton } from '../../styled/GamilyStyle';
import ConfettiExplosion from 'react-confetti-explosion';

const AnswerSheet = memo(({ question, userAnswer }) => {
   const navigate = useNavigate();
   const result = question.reduce((acc, cur) => (cur.answer === userAnswer[cur.id] ? acc + cur.score : acc), 0);
   const [isExploding, setIsExploding] = useState(false);
   useEffect(() => {
      if (result >= 60) {
         setIsExploding(true);
         setTimeout(() => setIsExploding(false), 2500);
      }
   }, []);
   return (
      <AnswerSheetContainer>
         {isExploding && (
            <ConfettiExplosion
               particleSize={20}
               zIndex={9999}
               style={{
                  position: 'fixed',
                  top: '20%',
                  left: '50%',
               }}
            />
         )}
         <h2>결과 : {result}점</h2>
         <ul>
            {question.map((item, idx) => (
               <li key={idx}>
                  <p>
                     <span>{item.id}.</span>
                     <strong>{item.question}</strong>
                     <span>({item.score}점)</span>
                     <span className="answer-icon">
                        {item.answer === userAnswer[item.id] ? (
                           <i className="xi-check" style={{ color: '#1c3761' }}></i>
                        ) : (
                           <i className="xi-close" style={{ color: '#e84200' }}></i>
                        )}
                     </span>
                  </p>

                  {item.options.map((option, idx) => (
                     <label key={idx}>
                        <input
                           type="radio"
                           name={item.id}
                           id={Object.keys(option)}
                           checked={userAnswer[item.id] === Object.keys(option)[0]}
                           readOnly
                        />
                        {Object.values(option)}
                     </label>
                  ))}
                  <div className="commentary-box">
                     <p>정답 : {item.options[Number(item.answer.slice(-1)) - 1][item.answer]}</p>
                     <p>해설 : {item.info}</p>
                  </div>
               </li>
            ))}
         </ul>
         <ParticleButton onClick={() => navigate('/quiz')}>나가기</ParticleButton>
      </AnswerSheetContainer>
   );
});

export default AnswerSheet;
