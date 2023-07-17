import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useAuth = () => {
   const { auth } = useSelector(state => state.authR);
   const navigate = useNavigate();
   const checkAuth = () => {
      if (!auth) {
         Swal.fire({
            title: '로그인이 필요합니다',
            text: '로그인 페이지로 가시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            if (result.isConfirmed) navigate('/login');
         });
      }
   };

   return {
      auth,
      checkAuth,
   };
};

export default useAuth;
