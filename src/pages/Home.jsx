import React, { memo } from 'react';
import MainVisual from '../components/home/MainVisual';
import TailWagCountdown from '../components/home/TailWagCountdown';
import VisualText from '../components/home/VisualText1';
// import Visual from '../components/home/Visual';
// import VisualText from '../components/home/VisualText';

const Home = memo(() => {
   return (
      <>
         <MainVisual />
         <TailWagCountdown />
         <VisualText />
      </>
   );
});

export default Home;
