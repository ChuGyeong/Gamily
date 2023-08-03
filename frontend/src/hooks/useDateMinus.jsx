import React from 'react';

const useDateMinus = days => {
   const [minusDate, setMinusDate] = useState('');

   const getMinusDateString = useCallback(() => {
      const date = new Date();
      date.setDate(date.getDate() - days);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}${month}${day}`;
   }, []);

   useEffect(() => {
      setToday(getDateString());
   }, [getDateString]);

   return minusDate;
};

export default useDateMinus;
