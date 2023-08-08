import React, { memo, useEffect, useState } from 'react';
import { AddQnAContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editQuestion, getMyQna } from '../store/modules/qnaSlice';
import Swal from 'sweetalert2';

const EditQnA = memo(() => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { auth } = useSelector(state => state.authR);
   const { myQna } = useSelector(state => state.qnaR);
   const { qnaEditId } = useParams();
   const [current, setCurrent] = useState({ title: '', question: '' });

   const chnageInput = e => {
      const { name, value } = e.target;
      setCurrent({ ...current, [name]: value });
   };

   const onSubmit = e => {
      e.preventDefault();
      Swal.fire({
         icon: 'success',
         title: '제출 성공',
         test: 'QnA 수정 완료',
      });
      dispatch(editQuestion(current));
      navigate('/qna');
   };
   useEffect(() => {
      dispatch(getMyQna(auth.email));
   }, []);
   useEffect(() => {
      if (myQna) setCurrent(myQna.find(item => item.id === Number(qnaEditId)));
   }, [myQna]);
   return (
      <AddQnAContainer>
         <InnerContainer>
            {current && (
               <>
                  <h2>문의글 수정하기</h2>
                  <form onSubmit={onSubmit}>
                     <label>제목</label>
                     <input
                        type="text"
                        placeholder="제목을 작성해주세요"
                        name="title"
                        required
                        onChange={chnageInput}
                        value={current.title}
                     />
                     <label>내용</label>
                     <textarea
                        cols="100"
                        rows="10"
                        placeholder="내용을 작성해주세요"
                        required
                        onChange={chnageInput}
                        value={current.question}
                        name="question"></textarea>
                     <div className="btn-area">
                        <ParticleButton type="submit">확인</ParticleButton>
                        <ParticleButton onClick={() => navigate('/qna')}>취소</ParticleButton>
                     </div>
                  </form>
               </>
            )}
         </InnerContainer>
      </AddQnAContainer>
   );
});

export default EditQnA;
