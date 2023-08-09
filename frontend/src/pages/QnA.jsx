import React, { memo, useEffect } from 'react';
import { QnAContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import QnAItem from './QnAItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getQnaData } from '../store/modules/qnaSlice';

const QnA = memo(() => {
   const { qnaData } = useSelector(state => state.qnaR);
   const { auth, checkAuth } = useAuth();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const goToAdd = () => {
      if (auth) navigate('/qnaAdd');
      else checkAuth();
   };
   useEffect(() => {
      dispatch(getQnaData());
   }, []);
   return (
      <QnAContainer>
         <InnerContainer>
            <h2>QnA</h2>
            {qnaData && qnaData.length > 0 ? (
               <div className="contents">
                  <ul>{qnaData && qnaData.map(item => <QnAItem key={item.id} item={item} />)}</ul>
               </div>
            ) : (
               <div>작성된 질문이 없습니다</div>
            )}
            <div className="btn-area">
               <button onClick={goToAdd}>작성하기</button>
            </div>
         </InnerContainer>
      </QnAContainer>
   );
});

export default QnA;
