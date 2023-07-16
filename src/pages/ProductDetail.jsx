import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Pagination } from 'swiper/modules';
import { getProduct } from '../store/modules/storeSlice';
import Loading from '../components/Loading';

const ProductDetail = memo(() => {
   const { data, status } = useSelector(state => state.storeR);
   const dispatch = useDispatch();
   const { productId } = useParams();
   const [product, setProduct] = useState({});
   const { title, price, description, detailImg, id, image, rate, subImg, summary, category } = product;
   const navigate = useNavigate();
   useEffect(() => {
      dispatch(getProduct());
   }, []);

   useEffect(() => {
      if (status === 'fulfilled') {
         setProduct(data.find(item => item.id === Number(productId)));
      }
   }, [data, productId, status]);

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
         {status === 'fulfilled' && Object.keys(product).length > 0 ? (
            <InnerContainer>
               <div className="btn-area">
                  <ParticleButton>상품담기</ParticleButton>
                  <ParticleButton>목록으로</ParticleButton>
               </div>
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
         ) : (
            <Loading />
         )}
      </ProductContainer>
   );
});

export default ProductDetail;
