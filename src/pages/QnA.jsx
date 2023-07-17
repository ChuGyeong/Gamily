import React, { memo } from 'react';
import { QnAContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import QnAItem from './QnAItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QnA = memo(() => {
   const { data } = useSelector(state => state.qnaR);
   const navigate = useNavigate();

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
               <button onClick={() => navigate('/qnaAdd')}>문의작성</button>
            </div>
         </InnerContainer>
      </QnAContainer>
   );
});

export default QnA;
