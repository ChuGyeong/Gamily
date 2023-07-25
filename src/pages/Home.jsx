import React, { memo } from 'react';
import MainVisual from '../components/home/MainVisual';
import VisualText from '../components/home/VisualText';
import Typing from '../components/home/Typing';
import Lp from '../components/home/Lp';
import MenuSlide from '../components/home/MenuSlide';
import RollingBanner from '../components/home/RollingBanner';
import MenuCross from '../components/home/MenuCross';

const Home = memo(() => {
   return (
      <>
         <MainVisual />
         <VisualText />
         <Lp />
         <Typing />
         <RollingBanner />
         <MenuCross />
         <MenuSlide />
      </>
   );
});

export default Home;
