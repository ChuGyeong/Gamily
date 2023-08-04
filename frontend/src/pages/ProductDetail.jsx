import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Pagination } from 'swiper/modules';
import { getProduct } from '../store/modules/storeSlice';
import Loading from '../components/common/Loading';
import Swal from 'sweetalert2';
import { addInCart, resetAuthState } from '../store/modules/authSlice';
import useAuth from '../hooks/useAuth';

const ProductDetail = memo(() => {
   const { data, status } = useSelector(state => state.storeR);
   const { authState } = useSelector(state => state.authR);
   const dispatch = useDispatch();
   const { productId } = useParams();
   const [product, setProduct] = useState({});
   const { title, price, description, detailImg, id, image, rate, subImg, summary, category, count } = product;
   const navigate = useNavigate();
   const { auth, checkAuth } = useAuth();
   const addCart = () => {
      if (!auth) checkAuth();
      else {
         dispatch(addInCart({ authID: auth.id, cartItem: product }));
      }
   };
   useEffect(() => {
      dispatch(getProduct());
   }, []);
   useEffect(() => {
      if (status === 'fulfilled') {
         setProduct(data.find(item => item.id === Number(productId)));
      }
   }, [data, productId, status]);
   useEffect(() => {
      if ((authState.title === 'success') & (authState.text === 'addInCart')) {
         Swal.fire({
            title: '해당 상품을 장바구니에 담았습니다',
            text: '장바구니로 가시겠습니까?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
         }).then(result => {
            dispatch(resetAuthState());
            if (result.isConfirmed) navigate('/mypage');
         });
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
               <div className="tit-area">
                  <p>{category}</p>
                  <h3>{title}</h3>
                  <div className="star-area">{starRating(rate)}</div>
                  <p>남은 수량: {count}</p>
                  <p className="price">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                  <div className="btn-area">
                     <ParticleButton onClick={addCart}>상품담기</ParticleButton>
                     <ParticleButton onClick={() => navigate('/store')}>목록으로</ParticleButton>
                  </div>
               </div>
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
