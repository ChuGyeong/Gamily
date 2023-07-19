import React, { memo, useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { MyDogContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import useDate from '../hooks/useDate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearState, getAdoptions, getOrgData, getVarietyData } from '../store/modules/adoptionSlice';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';

const MyDogAdoption = memo(() => {
   const [address, setAddress] = useState('');
   const [zoneCode, setZoneCode] = useState('');
   const [showPostCode, setShowPostCode] = useState(false);

   const openPostCode = () => {
      setShowPostCode(true);
   };

   const closePostCode = () => {
      setShowPostCode(false);
   };

   const userAddress = data => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
         if (data.bname !== '') {
            extraAddress += data.bname;
         }
         if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
         }
         fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      setZoneCode(data.zonecode);
      setAddress(fullAddress);
      closePostCode();
   };

   const changeInput = e => {
      if (e.target.name === 'name') {
      } else if (e.target.name === 'tel') {
      } else if (e.target.name === 'postCode') {
         setZoneCode(e.target.value);
      } else if (e.target.name === 'address') {
         setAddress(e.target.value);
      }
   };

   const date = useDate();
   const formatDate = date => {
      const year = date.slice(0, 4);
      const month = date.slice(4, 6);
      const day = date.slice(6, 8);
      return `${year}-${month}-${day}`;
   };
   const formattedDate = formatDate(date);

   const { auth, authData } = useSelector(state => state.authR);
   const { data = [], state } = useSelector(state => state.adoptionsR);

   const { myDogId } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [myDog, setMyDog] = useState({});
   useEffect(() => {
      dispatch(getAdoptions({ adoptionId: myDogId }));
      if (state === 'fulfilled' && data) setMyDog(data);
   }, [myDogId]);

   const onSubmit = e => {
      e.preventDefault();
      Swal.fire({
         icon: 'success',
         title: '작성 완료',
         text: '제출을 완료했습니다',
      });
      navigate('/adoption');
   };

   return (
      <MyDogContainer>
         <InnerContainer>
            {state === 'fulfilled' ? (
               <>
                  <div className="myDogInfo">
                     <div className="img-area">
                        <img src={myDog.popfile} alt="" />
                     </div>
                     <div className="text-area">
                        <p>
                           <span>유기번호</span>
                           <strong>{myDog.desertionNo}</strong>
                        </p>
                        <p>
                           <span>보호소 이름</span>
                           <strong>{myDog.careNm}</strong>
                        </p>
                        <p>
                           <span>보호소 전화번호</span>
                           <strong>{myDog.careTel}</strong>
                        </p>
                        <p>
                           <span>보호장소 </span>
                           <strong>{myDog.careAddr}</strong>
                        </p>
                        <p>
                           <span>담장자 연락처</span>
                           <strong>{myDog.officetel}</strong>
                        </p>
                        <p></p>
                     </div>
                  </div>
                  <form onSubmit={onSubmit}>
                     <h2>입양신청서</h2>
                     <span className="today">{formattedDate}</span>
                     <div className="userInfo">
                        <h3>입양신청자 정보</h3>
                        <p>
                           <label>이름</label>
                           <input
                              type="text"
                              name="name"
                              placeholder="이름을 입력하세요"
                              onChange={changeInput}
                              className="wid400"
                              required
                           />
                        </p>
                        <p>
                           <span>이메일</span>
                           <strong className="useremail">{auth.email}</strong>
                        </p>
                        <p>
                           <label>연락처</label>
                           <select>
                              <option>010</option>
                              <option>011</option>
                           </select>
                           <input
                              type="number"
                              name="subtel"
                              placeholder="1234"
                              onChange={changeInput}
                              className="wid100"
                              required
                           />
                           <input
                              type="number"
                              name="lasttel"
                              placeholder="5678"
                              onChange={changeInput}
                              className="wid100"
                              required
                           />
                        </p>
                        <p className="addr">
                           <label>주소</label>
                           <input
                              type="text"
                              name="postCode"
                              placeholder="우편번호"
                              value={zoneCode}
                              onChange={changeInput}
                              readOnly
                              className="wid100"
                           />
                           <ParticleButton onClick={openPostCode} type="button" className="addr-search">
                              주소찾기
                           </ParticleButton>
                           <input
                              type="text"
                              name="address"
                              placeholder="주소"
                              value={address}
                              readOnly
                              style={{ backgroundColor: '#f5f5f5' }}
                              onChange={changeInput}
                              className="wid700"
                           />
                           <input type="text" name="detailAddress" placeholder="상세주소" className="wid400" />
                        </p>
                        {showPostCode && (
                           <div className="modal">
                              <div className="modal-content">
                                 <button onClick={closePostCode}>닫기</button>
                                 <DaumPostcode onComplete={userAddress} />
                              </div>
                           </div>
                        )}
                     </div>
                     <div className="ask-area">
                        <h3>입양 질문</h3>
                        <p>
                           <strong>현재 함께 사는 가족들이 모두 입양에 동의하십니까?</strong>
                           <label>
                              <input type="radio" name="ask1" />
                              <span>네</span>
                           </label>
                           <label>
                              <input type="radio" name="ask1" />
                              <span>아니요</span>
                           </label>
                        </p>
                        <p>
                           <strong>현재 반려 동물을 키우고 계십니까?</strong>
                           <label>
                              <input type="radio" name="ask2" />
                              <span>네</span>
                           </label>
                           <label>
                              <input type="radio" name="ask2" />
                              <span>아니요</span>
                           </label>
                        </p>
                        <p>
                           <strong>있으면 어떤 종류의 동물이며 나이는 어떻게 되나요?</strong>
                           <label>
                              <input type="text" className="wid200" />
                              <input type="text" className="wid100" />
                           </label>
                        </p>
                        <p>
                           <strong>신청자분은 왜 이 아이를 반려 동물로 입양하고자 하나요?</strong>
                           <label>
                              <input type="text" />
                           </label>
                        </p>
                        <p>
                           <strong>
                              입양하는 반려 동물이 어떻게 신청자분과 지내고 있는지 소식을 전해주실 수 있나요?(이메일,
                              블로그, 사진 등)
                           </strong>
                           <label>
                              <input type="radio" name="ask3" />
                              <span>네</span>{' '}
                           </label>
                           <label>
                              <input type="radio" name="ask3" />
                              <span>아니요</span>
                           </label>
                        </p>
                        <p>
                           <strong>기타 하실 말씀 있으시면 해주세요</strong>
                           <label>
                              <textarea name="" id="" cols="30" rows="10"></textarea>
                           </label>
                        </p>
                     </div>
                     <div className="btn-area">
                        <ParticleButton type="submit">확인</ParticleButton>
                        <ParticleButton onClick={() => navigate('/')}>취소</ParticleButton>
                     </div>
                  </form>
               </>
            ) : (
               <Loading />
            )}
         </InnerContainer>
      </MyDogContainer>
   );
});

export default MyDogAdoption;
