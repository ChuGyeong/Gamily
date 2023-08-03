import React, { memo } from 'react';
import { UserQnAContent, ParticleButton } from '../../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delQuestion } from '../../store/modules/qnaSlice';
import Swal from 'sweetalert2';

const MyQnA = memo(() => {
   const { data } = useSelector(state => state.qnaR);
   const { auth } = useSelector(state => state.authR);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const handleDel = id => {
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
      <UserQnAContent>
         <h3>질문 목록</h3>
         <ul>
            {data
               .filter(item => item.email === auth.email)
               .map(item => (
                  <li key={item.id}>
                     <p>
                        <strong>{item.title}</strong>
                        <span>답변이 없습니다.</span>
                     </p>
                     <div className="btn-area">
                        <ParticleButton onClick={() => navigate(`/qnaEdit/${item.id}`)}>수정</ParticleButton>
                        <ParticleButton onClick={() => handleDel(item.id)}>삭제</ParticleButton>
                     </div>
                  </li>
               ))}
         </ul>
      </UserQnAContent>
   );
});

export default MyQnA;
