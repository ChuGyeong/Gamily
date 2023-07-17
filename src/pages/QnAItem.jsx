import React, { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delQuestion } from '../store/modules/qnaSlice';

const QnAItem = memo(({ item }) => {
   const { id, title, username, date, ask } = item;
   const [isChk, setIsChk] = useState(false);
   const contentRef = useRef(null);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const contentHeight = isChk ? contentRef.current.scrollHeight + 'px' : '0px';

   const toggleAccordion = () => {
      setIsChk(!isChk);
   };

   return (
      <li>
         <div className="tit-area" onClick={toggleAccordion}>
            <p>{title}</p>
            <span>{username}</span>
            <span>{date}</span>
            <button>{isChk ? <i className="xi-angle-up"></i> : <i className="xi-angle-down"></i>}</button>
         </div>
         <div className={`content ${isChk ? 'on' : ''}`} ref={contentRef} style={{ height: contentHeight }}>
            <div className="ask-area">
               <p>{ask}</p>
               <div className="btn-area">
                  <button onClick={() => navigate(`/qnaEdit/${id}`)}>수정</button>
                  <button onClick={() => dispatch(delQuestion(id))}>삭제</button>
               </div>
            </div>
            <div className="answer-area"></div>
         </div>
      </li>
   );
});

export default QnAItem;
