import React, { memo } from 'react';
import MainVisual from '../components/home/MainVisual';
import VisualText from '../components/home/VisualText';
import Typing from '../components/home/Typing';
import Lp from '../components/home/Lp';
import MenuSlide from '../components/home/MenuSlide';

const Home = memo(() => {
   return (
      <>
         <MainVisual />
         <VisualText />
         <Lp />
         <Typing />
         <MenuSlide />
      </>
   );
});

export default Home;
