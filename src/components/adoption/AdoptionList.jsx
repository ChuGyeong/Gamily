import React, { memo } from 'react';
import AdoptionItem from './AdoptionItem';
import Masonry from 'react-masonry-css';

const AdoptionList = memo(({ data }) => {
   const breakpointColumnsObj = {
      default: 4, // 한 줄에 4개의 열이 나오도록 설정
      1100: 3,
      700: 2,
      500: 1,
   };
   return (
      <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
         {data.map(item => (
            <AdoptionItem key={item.desertionNo} item={item} />
         ))}
      </Masonry>
   );
});

export default AdoptionList;
