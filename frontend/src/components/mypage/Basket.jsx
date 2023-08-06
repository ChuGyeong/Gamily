import React, { memo } from 'react';
import {
   allProductDel,
   allProductOrder,
   checkProductDel,
   checkProductOrder,
   onCheckbox,
   quantityDown,
   quantityUp,
   toggleCheckbox,
} from '../../store/modules/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ParticleButton, MyPageContent } from '../../styled/GamilyStyle';
import Swal from 'sweetalert2';

const Basket = memo(() => {
   const { auth } = useSelector(state => state.authR);
   const { myCart } = useSelector(state => state.cartR);
   const { storeData } = useSelector(state => state.storeR);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   //  체크박스 토글 - 전체 선택/전체 해제
   const handleToggleCheckbox = () => {
      const productLength = myCart.length;
      if (productLength > 0) {
         dispatch(toggleCheckbox({ authEmail: auth.email }));
      } else {
         Swal.fire({
            title: '장바구니에 상품이 없습니다',
            icon: 'error',
         });
      }
   };
   //  선택 상품 삭제
   const handleCheckProductDel = () => {
      const productCheckLength = myCart.filter(item => item.isChk === true).length;
      if (productCheckLength > 0) {
         Swal.fire({
            title: '해당 상품들을 삭제하시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            if (result.isConfirmed) {
               dispatch(checkProductDel({ authEmail: auth.email }));
               Swal.fire('작업완료', '해당 상품들을 삭제했습니다', 'success');
            }
         });
      } else {
         Swal.fire({
            title: '선택한 상품이 없습니다',
            icon: 'error',
         });
      }
   };
   //  전체삭제
   const handleAllProductDel = () => {
      const productLength = myCart.length;
      if (productLength > 0) {
         Swal.fire({
            title: '전체 상품을 삭제하시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            if (result.isConfirmed) {
               dispatch(allProductDel({ authEmail: auth.email }));
               Swal.fire('작업완료', '전체 상품을 삭제했습니다', 'success');
            }
         });
      } else {
         Swal.fire({
            title: '장바구니에 상품이 없습니다',
            icon: 'error',
         });
      }
   };
   // 선택상품주문
   const handleCheckProductOrder = () => {
      const productCheckLength = myCart.filter(item => item.isChk === true).length;
      if (productCheckLength > 0) {
         Swal.fire({
            title: '해당 상품들을 주문하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            if (result.isConfirmed) {
               dispatch(checkProductOrder({ authEmail: auth.email }));
               Swal.fire('작업완료', '해당 상품들을 주문했습니다', 'success');
            }
         });
      } else {
         Swal.fire({
            title: '선택한 상품이 없습니다',
            icon: 'error',
         });
      }
   };
   // 전체주문
   const handleAllProductOrder = () => {
      const productLength = myCart.length;
      if (productLength > 0) {
         Swal.fire({
            title: '전체 상품을 주문하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            if (result.isConfirmed) {
               dispatch(allProductOrder({ authEmail: auth.email }));
               Swal.fire('작업완료', '전체 상품을 주문했습니다', 'success');
            }
         });
      } else {
         Swal.fire({
            title: '장바구니에 상품이 없습니다',
            icon: 'error',
         });
      }
   };
   return (
      <MyPageContent>
         <h3>찜한 상품</h3>
         <div className="btn-area">
            <ParticleButton onClick={handleToggleCheckbox}>
               {myCart && myCart.every(cartItem => cartItem.isChk) ? '전체해제' : '전체선택'}
            </ParticleButton>
            <ParticleButton onClick={handleCheckProductDel}>선택상품삭제</ParticleButton>
            <ParticleButton onClick={handleAllProductDel}>전체삭제</ParticleButton>
            <ParticleButton onClick={handleCheckProductOrder}>선택상품주문</ParticleButton>
            <ParticleButton onClick={handleAllProductOrder}>전체주문</ParticleButton>
         </div>
         <ul>
            {myCart && myCart.length > 0 && storeData && storeData.length > 0 ? (
               myCart.map(item => (
                  <li key={item.productID}>
                     <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={item.isChk}
                        onChange={() => dispatch(onCheckbox({ productID: item.productID, authEmail: auth.email }))}
                     />
                     <img
                        src={storeData.find(product => product.id === item.productID).image}
                        alt={storeData.find(product => product.id === item.productID).description}
                        onClick={() => navigate(`/product/${item.productID}`)}
                     />
                     <p onClick={() => navigate(`/product/${item.productID}`)} className="name">
                        {storeData.find(product => product.id === item.productID).description}
                     </p>
                     <div className="quantity-up-down">
                        <button
                           onClick={() =>
                              item.quantity < storeData.find(product => product.id === item.productID).count &&
                              dispatch(quantityUp({ productID: item.productID, authEmail: auth.email }))
                           }>
                           <i className="xi-angle-up"></i>
                        </button>
                        <span>{item.quantity}</span>
                        <button
                           onClick={() =>
                              item.quantity > 1 &&
                              dispatch(quantityDown({ productID: item.productID, authEmail: auth.email }))
                           }>
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
