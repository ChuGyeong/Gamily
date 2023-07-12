import React, { useCallback, useState } from 'react';

const useDate = () => {
   const [today, setToday] = useState(new Date());
   const getDateString = useCallback(() => {
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const date = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${date}`;
   }, [today]);
   return getDateString;
};

export default useDate;
