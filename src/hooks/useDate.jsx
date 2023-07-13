import React, { useCallback, useState, useEffect } from 'react';

const useDate = () => {
   const [today, setToday] = useState('');

   const getDateString = useCallback(() => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}${month}${day}`;
   }, []);

   useEffect(() => {
      setToday(getDateString());
   }, [getDateString]);

   return today;
};

export default useDate;
