import React, { memo, useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { MyDogContainer, InnerContainer, ParticleButton } from '../styled/GamilyStyle';
import useDate from '../hooks/useDate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAdoptions } from '../store/modules/adoptionSlice';
import Loading from '../components/common/Loading';
import Swal from 'sweetalert2';
import { addAdoptionApp } from '../store/modules/adoptionAppSlice';

const MyDogAdoption = memo(() => {
   const { myDogId } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { auth, authData } = useSelector(state => state.authR);
   const { data = [], state } = useSelector(state => state.adoptionsR);
   const date = useDate();
   const [myDog, setMyDog] = useState({});
   const [adoptionAppData, setAdoptionAppData] = useState({
      date: date,
      state: '서류검토중',
      profileImg: myDog.popfile,
      desertionNo: myDog.desertionNo,
      name: '',
      email: auth.email,
      tel1: '010',
      tel2: '',
      tel3: '',
      postCode: '',
      address: '',
      detailAddress: '',
      adoptionAgree: false,
      isRaisingPet: false,
      animalKind: '',
      animalAge: '',
      reasonsForAdoption: '',
      isSendNews: false,
      etc: '',
   });
   const [showPostCode, setShowPostCode] = useState(false);

   const clearAdoptionAppData = () => {
      setAdoptionAppData({
         date: date,
         state: '서류검토중',
         profileImg: myDog.popfile,
         desertionNo: myDog.desertionNo,
         name: '',
         email: auth.email,
         tel1: '010',
         tel2: '',
         tel3: '',
         postCode: '',
         address: '',
         detailAddress: '',
         adoptionAgree: false,
         isRaisingPet: false,
         animalKind: '',
         animalAge: '',
         reasonsForAdoption: '',
         isSendNews: false,
         etc: '',
      });
   };
   const openPostCode = () => setShowPostCode(true);
   const closePostCode = () => setShowPostCode(false);
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
      setAdoptionAppData({ ...adoptionAppData, postCode: data.zonecode, address: fullAddress });
      closePostCode();
   };
   const changeInput = e => {
      const { name, value, type } = e.target;
      if (type === 'radio') {
         const booleanValue = value === 'true';
         setAdoptionAppData({ ...adoptionAppData, [name]: booleanValue });
      } else setAdoptionAppData({ ...adoptionAppData, [name]: value });
   };

   const formatDate = date => {
      const year = date.slice(0, 4);
      const month = date.slice(4, 6);
      const day = date.slice(6, 8);
      return `${year}-${month}-${day}`;
   };
   const formattedDate = formatDate(date);

   const onSubmit = e => {
      e.preventDefault();
      dispatch(addAdoptionApp(adoptionAppData));
      Swal.fire({
         icon: 'success',
         title: '작성 완료',
         text: '제출을 완료했습니다',
      });
      navigate('/adoption');
      clearAdoptionAppData();
   };

   useEffect(() => {
      dispatch(getAdoptions({ adoptionId: myDogId }));
      if (state === 'fulfilled' && data) {
         setMyDog(data);
         setAdoptionAppData({ ...adoptionAppData, profileImg: data.popfile, desertionNo: data.desertionNo });
      }
   }, [myDogId]);
   useEffect(() => {
      setAdoptionAppData(adoptionAppData => ({ ...adoptionAppData, date }));
   }, [date]);

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
                              value={adoptionAppData.name}
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
                           <select name="tel1" value={adoptionAppData.tel1} onChange={changeInput}>
                              <option>010</option>
                              <option>011</option>
                           </select>
                           <input
                              type="number"
                              name="tel2"
                              placeholder="1234"
                              onChange={changeInput}
                              value={adoptionAppData.tel2}
                              className="wid100"
                              required
                           />
                           <input
                              type="number"
                              name="tel3"
                              placeholder="5678"
                              onChange={changeInput}
                              value={adoptionAppData.tel3}
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
                              value={adoptionAppData.postCode}
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
                              value={adoptionAppData.address}
                              readOnly
                              style={{ backgroundColor: '#f5f5f5' }}
                              onChange={changeInput}
                              className="wid700"
                           />
                           <input
                              type="text"
                              name="detailAddress"
                              value={adoptionAppData.detailAddress}
                              onChange={changeInput}
                              placeholder="상세주소"
                              className="wid400"
                           />
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
                              <input
                                 type="radio"
                                 name="adoptionAgree"
                                 value={true}
                                 checked={adoptionAppData.adoptionAgree === true}
                                 onChange={changeInput}
                              />
                              <span>네</span>
                           </label>
                           <label>
                              <input
                                 type="radio"
                                 name="adoptionAgree"
                                 value={false}
                                 checked={adoptionAppData.adoptionAgree === false}
                                 onChange={changeInput}
                              />
                              <span>아니요</span>
                           </label>
                        </p>
                        <p>
                           <strong>현재 반려 동물을 키우고 계십니까?</strong>
                           <label>
                              <input
                                 type="radio"
                                 name="isRaisingPet"
                                 value={true}
                                 checked={adoptionAppData.isRaisingPet === true}
                                 onChange={changeInput}
                              />
                              <span>네</span>
                           </label>
                           <label>
                              <input
                                 type="radio"
                                 name="isRaisingPet"
                                 value={false}
                                 checked={adoptionAppData.isRaisingPet === false}
                                 onChange={changeInput}
                              />
                              <span>아니요</span>
                           </label>
                        </p>
                        <p>
                           <strong>있으면 어떤 종류의 동물이며 나이는 어떻게 되나요?</strong>
                           <label>
                              <input
                                 type="text"
                                 className="wid200"
                                 name="animalKind"
                                 value={adoptionAppData.animalKind}
                                 onChange={changeInput}
                              />
                              <input
                                 type="text"
                                 className="wid100"
                                 name="animalAge"
                                 value={adoptionAppData.animalAge}
                                 onChange={changeInput}
                              />
                           </label>
                        </p>
                        <p>
                           <strong>신청자분은 왜 이 아이를 반려 동물로 입양하고자 하나요?</strong>
                           <label>
                              <input
                                 type="text"
                                 name="reasonsForAdoption"
                                 value={adoptionAppData.reasonsForAdoption}
                                 onChange={changeInput}
                              />
                           </label>
                        </p>
                        <p>
                           <strong>
                              입양하는 반려 동물이 어떻게 신청자분과 지내고 있는지 소식을 전해주실 수 있나요?(이메일,
                              블로그, 사진 등)
                           </strong>
                           <label>
                              <input
                                 type="radio"
                                 name="isSendNews"
                                 value={true}
                                 checked={adoptionAppData.isSendNews === true}
                                 onChange={changeInput}
                              />
                              <span>네</span>
                           </label>
                           <label>
                              <input
                                 type="radio"
                                 name="isSendNews"
                                 value={false}
                                 checked={adoptionAppData.isSendNews === false}
                                 onChange={changeInput}
                              />
                              <span>아니요</span>
                           </label>
                        </p>
                        <p>
                           <strong>기타 하실 말씀 있으시면 해주세요</strong>
                           <label>
                              <textarea
                                 id=""
                                 cols="30"
                                 rows="10"
                                 name="etc"
                                 value={adoptionAppData.etc}
                                 onChange={changeInput}></textarea>
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
