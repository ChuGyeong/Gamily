import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParticleButton } from '../../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addInCart, resetAuthState } from '../../store/modules/authSlice';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const ProductItem = memo(({ item }) => {
   const { id, image, title, price, count } = item;
   const { authState } = useSelector(state => state.authR);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { auth, checkAuth } = useAuth();
   const addCart = () => {
      if (!auth) checkAuth();
      else {
         dispatch(addInCart(item));
      }
   };
   useEffect(() => {
      if ((authState.title === 'success') & (authState.text === 'addInCart')) {
      } else if ((authState.title === 'fail') & (authState.text === 'addInCart')) {
         Swal.fire({
            title: '해당 상품이 장바구니에 이미 있습니다',
            text: '장바구니로 가시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            dispatch(resetAuthState());
            if (result.isConfirmed) navigate('/mypage');
         });
      }
   }, [authState]);
   return (
      <li>
         <div className="img-area">
            <img src={image} alt="" />
         </div>
         <div className="text-area">
            <p>{title}</p>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            <p>{count < 5 && '품절임박'}</p>
         </div>
         <div className="btn-area">
            <ParticleButton onClick={() => navigate(`/product/${id}`)}>상세정보</ParticleButton>
            <ParticleButton onClick={addCart}>상품담기</ParticleButton>
         </div>
      </li>
   );
});

export default ProductItem;
