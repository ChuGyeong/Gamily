import React, { memo } from 'react';
import {
   allProductDel,
   checkProductDel,
   onCheckbox,
   quantityDown,
   quantityUp,
   toggleCheckbox,
} from '../../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ParticleButton, MyPageContent } from '../../styled/GamilyStyle';
import Swal from 'sweetalert2';

const Basket = memo(() => {
   const { auth, authData } = useSelector(state => state.authR);
   const { cart } = (auth && authData.find(item => item.email === auth.email)) || {
      cart: [],
   };
   const dispatch = useDispatch();
   const navigate = useNavigate();

   //  선택 상품 삭제
   const onCheckProductDel = () => {
      Swal.fire({
         title: '해당 상품들을 삭제하시겠습니까?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: '예',
         cancelButtonText: '아니오',
      }).then(result => {
         if (result.isConfirmed) {
            dispatch(checkProductDel());
            Swal.fire('작업완료', '해당 상품들을 삭제했습니다', 'success');
         }
      });
   };

   return (
      <MyPageContent>
         <h3>찜한 상품</h3>
         <div className="btn-area">
            <ParticleButton
               onClick={() => {
                  dispatch(toggleCheckbox());
               }}>
               {cart.every(cartItem => cartItem.isChk) ? '전체해제' : '전체선택'}
            </ParticleButton>
            <ParticleButton onClick={onCheckProductDel}>선택상품삭제</ParticleButton>
            <ParticleButton onClick={() => dispatch(allProductDel())}>전체삭제</ParticleButton>
            <ParticleButton onClick={() => dispatch(checkProductDel())}>선택상품주문</ParticleButton>
            <ParticleButton onClick={() => dispatch(allProductDel())}>전체주문</ParticleButton>
         </div>
         <ul>
            {cart.length > 0 ? (
               cart.map(item => (
                  <li key={item.id}>
                     {/* <button onClick={() => dispatch(removeInCart(item))} className="close">
               <i className="xi-close"></i>
            </button> */}
                     <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={item.isChk}
                        onChange={() => dispatch(onCheckbox(item.id))}
                     />
                     <img src={item.image} alt={item.description} onClick={() => navigate(`/product/${item.id}`)} />
                     <p onClick={() => navigate(`/product/${item.id}`)} className="name">
                        {item.description}
                     </p>
                     <div className="quantity-up-down">
                        <button onClick={() => item.quantity < item.count && dispatch(quantityUp(item.id))}>
                           <i className="xi-angle-up"></i>
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => item.quantity > 1 && dispatch(quantityDown(item.id))}>
                           <i className="xi-angle-down"></i>
                        </button>
                     </div>
                  </li>
               ))
            ) : (
               <div className="not-list">
                  <p>데이터가 존재하지 않습니다.</p>
               </div>
            )}
         </ul>
      </MyPageContent>
   );
});

export default Basket;
