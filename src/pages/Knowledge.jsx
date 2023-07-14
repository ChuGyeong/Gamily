import React, { memo, useEffect } from 'react';
import { KnowledgeContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getKnowledge } from '../store/modules/knowledgeSlice';
import Loading from '../components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import WaveEffects from '../components/WaveEffects';

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
            <WaveEffects top={'100px'} left={'-300px'} isAdd={true} />
            <WaveEffects top={'400px'} left={'-450px'} />
            <WaveEffects top={'40%'} left={'1400px'} />
            <WaveEffects top={'65%'} left={'-150px'} isAdd={true} />
            <WaveEffects top={'85%'} left={'1550px'} isAdd={true} />
            {status === 'fulfilled' ? (
               <>
                  <div className="text-area">
                     {data[0].detail.map((item, idx) =>
                        idx % 2 === 0 ? (
                           <div key={item.id} data-aos="fade-right" data-aos-duration="1000">
                              <strong>{item.title}</strong>
                              <p>{item.detailInfo}</p>
                           </div>
                        ) : (
                           <div key={item.id} data-aos="fade-left" data-aos-duration="1300">
                              <strong>{item.title}</strong>
                              <p>{item.detailInfo}</p>
                           </div>
                        ),
                     )}
                  </div>
                  <div className="text-area">
                     {data[0].adoption.map((item, idx) =>
                        idx % 2 === 0 ? (
                           <div key={item.id} data-aos="fade-right" data-aos-duration="1200">
                              <strong>{item.title}</strong>
                              <p>{item.detailInfo}</p>
                           </div>
                        ) : (
                           <div key={item.id} data-aos="fade-left" data-aos-duration="1500">
                              <strong>{item.title}</strong>
                              <p>{item.detailInfo}</p>
                           </div>
                        ),
                     )}
                  </div>
               </>
            ) : (
               <Loading />
            )}
         </InnerContainer>
      </KnowledgeContainer>
   );
});

export default Knowledge;
