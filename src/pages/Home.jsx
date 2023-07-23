import React, { memo } from 'react';
import MainVisual from '../components/home/MainVisual';
import VisualText from '../components/home/VisualText';
import VisualSlide from '../components/home/VisualSlide';
import Lp from '../components/home/Lp';

const Home = memo(() => {
   return (
      <>
         <MainVisual />
         <VisualText />
         <Lp />
         <VisualSlide />
      </>
   );
});

export default Home;
