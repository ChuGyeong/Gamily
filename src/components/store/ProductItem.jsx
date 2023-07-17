import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParticleButton } from '../../styled/GamilyStyle';
import { useDispatch } from 'react-redux';
import { addInCart } from '../../store/modules/authSlice';

const ProductItem = memo(({ item }) => {
   const { id, image, title, price, count } = item;
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const addCart = () => {
      console.log(item);
      dispatch(addInCart(item));
   };
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
