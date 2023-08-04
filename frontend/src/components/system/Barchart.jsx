import * as React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Barchart = () => {
   const handle = {
      barClick: data => {
         console.log(data);
      },

      legendClick: data => {
         console.log(data);
      },
   };

   const keylabel = [
      { id: 'application', label: '신청' },
      { id: 'approved', label: '승인' },
      { id: 'rejected', label: '거절' },
      { id: 'waiting', label: '대기' },
   ];

   return (
      // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
      <div style={{ width: '1400px', height: '400px', margin: '0 auto' }}>
         <ResponsiveBar
            /**
             * chart에 사용될 데이터
             */
            data={[
               { month: 'Jan', application: 1, approved: 0, rejected: 1, waiting: 0 },
               { month: 'Feb', application: 3, approved: 1, rejected: 2, waiting: 0 },
               { month: 'Mar', application: 10, approved: 3, rejected: 7, waiting: 0 },
               { month: 'Apr', application: 2, approved: 2, rejected: 0, waiting: 0 },
               { month: 'May', application: 5, approved: 2, rejected: 3, waiting: 0 },
               { month: 'Jun', application: 7, approved: 4, rejected: 2, waiting: 1 },
               { month: 'Jul', application: 15, approved: 7, rejected: 3, waiting: 5 },
               { month: 'Aug', application: 0, approved: 0, rejected: 0, waiting: 0 },
               { month: 'Sep', application: 0, approved: 0, rejected: 0, waiting: 0 },
               { month: 'Oct', application: 0, approved: 0, rejected: 0, waiting: 0 },
               { month: 'Nov', application: 0, approved: 0, rejected: 0, waiting: 0 },
               { month: 'Dec', application: 0, approved: 0, rejected: 0, waiting: 0 },
            ]}
            groupMode="grouped"
            keys={['application', 'approved', 'rejected', 'waiting']}
            indexBy="month"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.5}
            colors={['#ffc303', '#e84200', '#1c3761', '#fff']}
            colorBy="id"
            theme={{
               labels: {
                  text: {
                     fontSize: 11,
                     fontWeight: 700,
                     fill: '#fff',
                  },
               },
               axis: {
                  ticks: {
                     text: {
                        fontSize: 13,
                        fontWeight: 700,
                        fill: '#000',
                     },
                  },
               },
            }}
            axisBottom={{
               tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
               tickPadding: 5, // tick padding
               tickRotation: 0, // tick 기울기
            }}
            axisLeft={{
               tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
               tickPadding: 5, // tick padding
               tickRotation: 0, // tick 기울기
            }}
            labelSkipWidth={36}
            labelSkipHeight={12}
            legends={[
               {
                  symbolShape: 'circle',
                  dataFrom: 'keys', // 보일 데이터 형태
                  anchor: 'bottom-right', // 위치
                  direction: 'column', // item 그려지는 방향
                  translateX: 120, // chart와 X 간격
                  translateY: 0, // chart와 Y 간격
                  itemsSpacing: 2, // item간 간격
                  itemWidth: 80, // item width
                  itemHeight: 20, // item height
                  itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                  itemOpacity: 1, // item opacity
                  symbolSize: 10, // symbol (색상 표기) 크기
               },
            ]}
         />
      </div>
   );
};

export default Barchart;
