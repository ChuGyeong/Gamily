import React, { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { delQuestion } from '../store/modules/qnaSlice';
import Swal from 'sweetalert2';

const QnAItem = memo(({ item }) => {
   const { id, title, username, date, ask } = item;
   const { auth } = useSelector(state => state.authR);
   const [isChk, setIsChk] = useState(false);
   const contentRef = useRef(null);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const contentHeight = isChk ? contentRef.current.scrollHeight + 'px' : '0px';

   const toggleAccordion = () => {
      setIsChk(!isChk);
   };
   const handleDel = () => {
      Swal.fire({
         title: '해당 QnA를 삭제하시겠습니까?',
         text: '다시 되돌릴 수 없습니다. 신중하세요.',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: '삭제',
         cancelButtonText: '취소',
      }).then(result => {
         if (result.isConfirmed) {
            Swal.fire('작업 성공', '삭제가 완료되었습니다.', 'success');
            dispatch(delQuestion(id));
         }
      });
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
               {(auth && username === auth.username) ||
                  (auth.isManager && (
                     <div className="btn-area">
                        <button onClick={() => navigate(`/qnaEdit/${id}`)}>수정</button>
                        <button onClick={handleDel}>삭제</button>
                     </div>
                  ))}
            </div>
            <div className="answer-area"></div>
         </div>
      </li>
   );
});

export default QnAItem;
