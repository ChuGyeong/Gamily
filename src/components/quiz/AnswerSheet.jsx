import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnswerSheetContainer } from '../../styled/GamilyStyle';

const AnswerSheet = memo(({ question, userAnswer }) => {
   const navigate = useNavigate();
   const result = question.reduce((acc, cur) => (cur.answer === userAnswer[cur.id] ? acc + cur.score : acc), 0);
   return (
      <AnswerSheetContainer>
         <h2>결과 : {result}점</h2>
         <ul>
            {question.map((item, idx) => (
               <li key={idx}>
                  <p>
                     <span>{item.id}.</span>
                     <strong>{item.question}</strong>
                     <span>({item.score}점)</span>
                     <span>({item.answer === userAnswer[item.id] ? '정답' : '오답'})</span>
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
         <button onClick={() => navigate('/quiz')}>나가기</button>
      </AnswerSheetContainer>
   );
});

export default AnswerSheet;
