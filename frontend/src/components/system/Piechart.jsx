import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Piechart = ({ tempData }) => {
   const handle = {
      padClick: data => {
         console.log(data);
      },
   };

   return (
      // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
      <div style={{ width: '240px', height: '150px', margin: '0 auto' }}>
         <ResponsivePie
            data={tempData}
            margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
            innerRadius={0.5}
            padAngle={1.8}
            cornerRadius={0}
            colors={['#ffc303', '#1c3761', '#e84200']}
            borderWidth={0}
            arcLinkLabelsSkipAngle={0}
            arcLinkLabelsTextColor="#000000"
            arcLinkLabelsThickness={1}
            arcLinkLabelsStraightLength={5}
            arcLinkLabelsDiagonalLength={5}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            theme={{
               labels: {
                  text: {
                     fontSize: 10,
                     fontWeight: 700,
                     fill: '#fff',
                  },
               },
            }}
            onClick={handle.padClick}
         />
      </div>
   );
};

export default Piechart;
