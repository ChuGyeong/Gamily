import React, { memo } from 'react';
import { InnerContainer, MainContainer, VisualSection } from '../styled/GamilyStyle';
import { FullPage, Slide } from 'react-full-page';
import Visual from '../components/Visual';
import VisualText from '../components/VisualText';

const Home = memo(() => {
   return (
      <>
         <FullPage>
            <Slide>
               <Visual />
            </Slide>
            <Slide>
               <VisualText />
            </Slide>
            <Slide></Slide>
         </FullPage>
      </>
   );
});

export default Home;
