import React, { memo } from 'react';
import MainVisual from '../components/home/MainVisual';
import VisualText from '../components/home/VisualText';

const Home = memo(() => {
   return (
      <>
         <MainVisual />
         <VisualText />
      </>
   );
});

export default Home;
