import React, { memo, useEffect } from 'react';
import { getQuiz } from '../store/modules/quizSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const QuizDetail = memo(() => {
   const { data } = useSelector(state => state.quizR);
   const { params } = useParams();

   console.log(params);
   console.log(data);
   console.log(window.location.pathname);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getQuiz());
   }, []);

   return <div></div>;
});

export default QuizDetail;
