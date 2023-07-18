import React, { memo, useState } from 'react';
import { ProfileEditContent, ParticleButton } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

const profileImg = [
   './images/profile.jpg',
   './images/profile_img1.jpg',
   './images/profile_img2.jpg',
   './images/profile_img3.jpg',
   './images/profile_img4.jpg',
];

const ProfileEdit = memo(({ setIsEdit }) => {
   const { auth } = useSelector(state => state.authR);
   const [previewImg, setPreviewImg] = useState(auth.profileImg ? auth.profileImg : './images/profile.jpg');
   const [txt, setTxt] = useState({ username: auth.username, pw: '', pwCheck: '' });
   const dispatch = useDispatch();

   const changeInput = e => {
      const { name, value } = e.target;
      setTxt({ ...txt, [name]: value });
   };

   const onSubmit = e => {
      e.preventDefault();
      if (txt.pw !== txt.pwCheck) {
         alert('비밀번호가 일치하지 않습니다.');
         return;
      }
      dispatch(editUser({ ...txt, profileImg: previewImg, email: auth.email }));
      setIsEdit(false);
   };

   return (
      <ProfileEditContent onSubmit={onSubmit}>
         <div className="update-profile">
            <button className="close" onClick={() => setIsEdit(false)}>
               <i className="xi-close"></i>
            </button>
            <h2>회원정보수정</h2>
            <form>
               <div className="img-area">
                  <div className="preview">
                     <img src={previewImg} alt="" />
                     <span></span>
                  </div>
                  <ul>
                     {profileImg.map((item, idx) => (
                        <li
                           key={idx}
                           onClick={() => {
                              setPreviewImg(item);
                           }}>
                           <img src={item} alt="" />
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="text-area">
                  <p>
                     <label>닉네임</label>
                     <input type="text" name="username" value={txt.username} onChange={changeInput} required />
                  </p>
                  <p>
                     <label>비밀번호</label>
                     <input type="password" name="pw" value={txt.pw} onChange={changeInput} required />
                  </p>
                  <p>
                     <label>비밀번호 확인</label>
                     <input type="password" name="pwCheck" value={txt.pwCheck} onChange={changeInput} required />
                  </p>
               </div>
               <div className="btn-area">
                  <ParticleButton type="submit">확인</ParticleButton>
               </div>
            </form>
         </div>
      </ProfileEditContent>
   );
});

export default ProfileEdit;
