import React, { memo } from 'react';
import Visual from '../components/home/Visual';
import VisualText from '../components/home/VisualText';
import VisualSlide from '../components/home/VisualSlide';

const Home = memo(() => {
   return (
      <>
         <VisualText />
         <VisualSlide />
      </>
   );
});

export default Home;
