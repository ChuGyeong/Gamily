import React, { memo } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Visual from '../components/Visual';
import VisualText from '../components/VisualText';
import DogInfoSection from '../components/DogInfoSection';

const Home = memo(() => {
   return (
      <>
         <FullPage>
            <Slide>
               <Visual />
            </Slide>
<<<<<<< HEAD
            <Slide>asd</Slide>
=======
>>>>>>> a7df5ca0f5819f746182030aba88380c674d59d3
            <Slide>
               <VisualText />
            </Slide>
            <Slide>
               <DogInfoSection />
            </Slide>
            <Slide></Slide>
         </FullPage>
      </>
   );
});

export default Home;
