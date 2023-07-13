import React, { useCallback, useState } from 'react';

const useDate = () => {
   const [today, setToday] = useState(new Date());
   const getDateString = useCallback(() => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');

      return `${year}${month}${day}`;
   }, [today]);
   setToday(getDateString());
   return today;
};

export default useDate;
