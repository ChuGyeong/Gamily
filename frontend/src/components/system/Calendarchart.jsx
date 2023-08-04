import { ResponsiveCalendar } from '@nivo/calendar';

const Calendarchart = ({ tempData }) => (
   <ResponsiveCalendar
      data={tempData}
      from="2022-03-01"
      to="2023-07-12"
      emptyColor="#f6f6f6"
      colors={['#999', '#666', '#333', '#000']}
      minValue={18}
      margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
      yearSpacing={25}
      yearLegendOffset={20}
      monthSpacing={10}
      align={'right'}
      monthBorderWidth={0}
      monthBorderColor="#ffffff"
      dayBorderWidth={1}
      dayBorderColor="#ffffff"
      legends={[
         {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
         },
      ]}
   />
);

export default Calendarchart;
