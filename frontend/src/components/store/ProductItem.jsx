import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParticleButton } from '../../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { addInCart, resetCartState } from '../../store/modules/cartSlice';

const ProductItem = memo(({ item }) => {
   const { id, image, title, price, count } = item;
   const { cartState } = useSelector(state => state.cartR);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { auth, checkAuth } = useAuth();
   useEffect(() => {
      if ((cartState.title === 'success') & (cartState.text === 'addInCart')) {
         Swal.fire({
            title: '해당 상품을 장바구니에 담았습니다',
            text: '장바구니로 가시겠습니까?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            dispatch(resetCartState());
            if (result.isConfirmed) navigate('/mypage');
         });
      } else if ((cartState.title === 'fail') & (cartState.text === 'addInCart')) {
         Swal.fire({
            title: '해당 상품이 장바구니에 이미 있습니다',
            text: '장바구니로 가시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            dispatch(resetCartState());
            if (result.isConfirmed) navigate('/mypage');
         });
      }
   }, [cartState]);
   return (
      <li>
         <div className="img-area">
            <img src={image} alt="" />
         </div>
         <div className="text-area">
            <p>{title}</p>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            <p className="out-of-stock">{count < 5 && '품절임박'}</p>
            <p>남은 수량: {count}개</p>
         </div>
         <div className="btn-area">
            <ParticleButton onClick={() => navigate(`/product/${id}`)}>상세정보</ParticleButton>
            <ParticleButton onClick={() => dispatch(addInCart({ authEmail: auth.email, productID: item.id }))}>
               상품담기
            </ParticleButton>
         </div>
      </li>
   );
});

export default ProductItem;
