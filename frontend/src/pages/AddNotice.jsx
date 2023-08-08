import React, { memo, useState } from 'react';
import { AddQnAContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useDate from '../hooks/useDate';
import Swal from 'sweetalert2';
import { addNotice } from '../store/modules/noticeSlice';

const AddNotice = memo(() => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const today = useDate();
   const { auth } = useSelector(state => state.authR);
   const [txt, setTxt] = useState({ title: '', content: '', hits: 0 });
   const date = useDate();

   const formatDate = date => {
      const year = date.slice(0, 4);
      const month = date.slice(4, 6);
      const day = date.slice(6, 8);
      return `${year}-${month}-${day}`;
   };

   const formattedDate = formatDate(date);

   const chnageInput = e => {
      const { name, value } = e.target;
      setTxt({ ...txt, [name]: value });
   };

   const onSubmit = e => {
      e.preventDefault();
      Swal.fire({
         icon: 'success',
         title: '제출 성공',
         text: '공지사항 작성 완료',
      });
      dispatch(addNotice({ ...txt, date: formattedDate }));
      navigate('/notice');
   };

   return (
      <AddQnAContainer>
         <InnerContainer>
            <h2>공지글 작성하기</h2>
            <form onSubmit={onSubmit}>
               <label>제목</label>
               <input
                  type="text"
                  placeholder="제목을 작성해주세요"
                  name="title"
                  required
                  onChange={chnageInput}
                  value={txt.title}
               />
               <label>내용</label>
               <textarea
                  cols="100"
                  rows="10"
                  placeholder="내용을 작성해주세요"
                  required
                  onChange={chnageInput}
                  value={txt.content}
                  name="content"></textarea>
               <div className="btn-area">
                  <ParticleButton type="submit">확인</ParticleButton>
                  <ParticleButton onClick={() => navigate('/notice')}>취소</ParticleButton>
               </div>
            </form>
         </InnerContainer>
      </AddQnAContainer>
   );
});

export default AddNotice;
