import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContainer, InnerContainer } from '../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Pagination } from 'swiper/modules';

const ProductDetail = memo(() => {
   const { data } = useSelector(state => state.storeR);
   const { productId } = useParams();

   const navigate = useNavigate();

   const product = data.find(item => item.id === Number(productId));
   const { title, price, description, detailImg, id, image, rate, subImg, summary, category } = product;

   const starRating = (rating, color = '#BB1628') => {
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

   return (
      <ProductContainer>
         <InnerContainer>
            <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper">
               <SwiperSlide>
                  <img src={`.${image}`} alt="" />
               </SwiperSlide>
               {subImg.map((item, idx) => (
                  <SwiperSlide key={idx}>
                     <img src={`.${item}`} alt="" />
                  </SwiperSlide>
               ))}
            </Swiper>
            <p>{category}</p>
            <h3>{title}</h3>
            <div className="star-area">{starRating(rate)}</div>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            <div className="text-area">
               <p>
                  <strong>설명</strong>
                  {description}
               </p>
               <ul>
                  <strong>특징</strong>
                  {summary.map((item, idx) => (
                     <li key={idx}>{item}</li>
                  ))}
               </ul>
            </div>
            <div className="img-area">
               <img src={`.${detailImg}`} alt="" />
            </div>
         </InnerContainer>
      </ProductContainer>
   );
});

export default ProductDetail;
