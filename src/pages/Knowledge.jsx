import React, { memo, useEffect } from 'react';
import { KnowledgeContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getKnowledge } from '../store/modules/knowledgeSlice';
import Loading from '../components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

const Knowledge = memo(() => {
   const { data, status } = useSelector(state => state.knowledgeR);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getKnowledge());
   }, []);

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <KnowledgeContainer>
         <InnerContainer>
            {status === 'fulfilled' ? (
               <div className="text-area">
                  {data.map((item, idx) =>
                     idx % 2 === 0 ? (
                        <div key={item.id} data-aos="fade-right">
                           <strong>{item.title}</strong>
                           <p>{item.detailInfo}</p>
                        </div>
                     ) : (
                        <div key={item.id} data-aos="fade-left">
                           <strong>{item.title}</strong>
                           <p>{item.detailInfo}</p>
                        </div>
                     ),
                  )}
               </div>
            ) : (
               <Loading />
            )}
         </InnerContainer>
      </KnowledgeContainer>
   );
});

export default Knowledge;
