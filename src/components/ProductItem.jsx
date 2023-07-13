import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductItem = memo(({ item }) => {
   const { id, image, title, price, count } = item;

   const navigate = useNavigate();

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
            <button onClick={() => navigate(`/product/${id}`)}>상세정보</button>
            <button>상품담기</button>
         </div>
      </li>
   );
});

export default ProductItem;
