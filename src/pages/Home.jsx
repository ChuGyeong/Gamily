import React, { memo } from 'react';
import MainVisual from '../components/home/MainVisual';
import VisualText from '../components/home/VisualText';
import VisualSlide from '../components/home/VisualSlide';

const Home = memo(() => {
   return (
      <>
         <MainVisual />
         <VisualText />
         <VisualSlide />
      </>
   );
});

export default Home;
