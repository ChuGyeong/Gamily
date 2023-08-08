import React, { memo } from 'react';
import { QnAContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import QnAItem from './QnAItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const QnA = memo(() => {
   const { data } = useSelector(state => state.qnaR);
   const { auth, checkAuth } = useAuth();
   const navigate = useNavigate();

   const goToAdd = () => {
      if (auth) navigate('/qnaAdd');
      else checkAuth();
   };

   return (
      <QnAContainer>
         <InnerContainer>
            <h2>QnA</h2>
            <div className="contents">
               <ul>
                  {data.map(item => (
                     <QnAItem key={item.id} item={item} />
                  ))}
               </ul>
            </div>
            <div className="btn-area">
               <button onClick={goToAdd}>작성하기</button>
            </div>
         </InnerContainer>
      </QnAContainer>
   );
});

export default QnA;
