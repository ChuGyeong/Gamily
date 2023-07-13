import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const StarRating = (rating, color = '#BB1628') => {
   return (
      <>
         {Array(parseInt(rating))
            .fill(2)
            .map((el, i) => (
               <BsStarFill key={i} size="13" color={color} />
            ))}
         {rating % 1 !== 0 && <BsStarHalf size="13" color={color} />}
         {Array(Math.floor(5 - rating))
            .fill(2)
            .map((el, i) => (
               <BsStarFill key={i} size="13" color="#E3E3E3" />
            ))}
      </>
   );
};
