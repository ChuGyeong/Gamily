import React, { memo, useEffect, useState } from 'react';

const TimeSale = memo(() => {
   const [hour, setHour] = useState(23 - new Date().getHours());
   const [minute, setMinute] = useState(59 - new Date().getMinutes());
   const [second, setSecond] = useState(59 - new Date().getSeconds());

   useEffect(() => {
      const id = setInterval(() => {
         setHour(23 - new Date().getHours());
         setMinute(59 - new Date().getMinutes());
         setSecond(59 - new Date().getSeconds());
      }, 1000);
      return () => clearInterval(id);
   }, []);

   return (
      <div className="time-sale">
         <h3>오직 개밀리에서만 만날 수 있는 특별세일!</h3>
         <p>
            오늘만 이 가격{' '}
            <span>
               {hour < 10 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}:
               {second < 10 ? '0' + second : second}
            </span>
            <i className="xi-spinner-4 xi-spin"></i>
         </p>
      </div>
   );
});

export default TimeSale;
