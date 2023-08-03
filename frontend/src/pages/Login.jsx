import React, { memo, useEffect, useState } from 'react';
import { InnerContainer, ToggleSwitch, ToggleForm, ToggleFormContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { login, signUp } from '../store/modules/authSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useDate from '../hooks/useDate';

const Login = memo(() => {
   const { auth, authState } = useSelector(state => state.authR);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const today = useDate();
   const [isChk, setIsChk] = useState(false);
   const [loginUser, setLoginUser] = useState({ email: '', pw: '' });
   const [signUpUser, setSignUpUser] = useState({ email: '', pw: '', username: '', date: today });
   const handleLogin = e => {
      e.preventDefault();
      dispatch(login(loginUser));
   };

   const handleLoginInput = e => {
      const { name, value } = e.target;
      setLoginUser({ ...loginUser, [name]: value });
   };
   const handleSignUp = e => {
      e.preventDefault();
      dispatch(signUp(signUpUser));
      setSignUpUser({ email: '', pw: '', username: '', date: today });
   };
   const handleSignUpInput = e => {
      const { name, value } = e.target;
      setSignUpUser({ ...signUpUser, [name]: value });
   };
   useEffect(() => {
      const { title = '', text = '' } = authState;

      if (title === 'success') {
         if (text === 'login') {
            Swal.fire({ icon: 'success', title: '로그인 성공', text: `${auth.username}님 환영합니다` });
            navigate('/');
         } else if (text === 'signUp') {
            Swal.fire({ icon: 'success', title: '회원가입 성공', text: `${auth.username}님 환영합니다` });
            navigate('/');
         }
      }
      if (title === 'fail') {
         if (text === 'notMatchPw')
            Swal.fire({ icon: 'error', title: '로그인 실패', text: '비밀번호를 확인해 주세요' });
         else if (text === 'notFoundEmail')
            Swal.fire({ icon: 'error', title: '로그인 실패', text: '이메일을 확인해 주세요' });
         else if (text === 'duplicate') {
            Swal.fire({ icon: 'error', title: '회원가입 실패', text: '이미 있는 이메일 입니다' });
         }
      }
   }, [authState]);
   return (
      <>
         <InnerContainer>
            <ToggleSwitch>
               <label className="switch">
                  <input type="checkbox" checked={isChk} onChange={() => setIsChk(!isChk)} />
                  <span className="slider"></span>
               </label>
            </ToggleSwitch>
            <ToggleFormContainer className={!isChk ? 'login' : 'signUp'}>
               {!isChk ? (
                  <ToggleForm bgcolor={'#ffc303'} fontcolor={'#555'} pointcolor={'#fff'} onSubmit={handleLogin}>
                     <div className="card">
                        <a className="singup">Login</a>
                        <div className="inputBox1">
                           <input
                              type="email"
                              required
                              name="email"
                              value={loginUser.email}
                              onChange={handleLoginInput}
                           />
                           <span className="user">Email</span>
                        </div>
                        <div className="inputBox">
                           <input type="password" required name="pw" value={loginUser.pw} onChange={handleLoginInput} />
                           <span>Password</span>
                        </div>
                        <button className="enter">Enter</button>
                     </div>
                  </ToggleForm>
               ) : (
                  <ToggleForm bgcolor={'#1c3761'} fontcolor={'#fff'} pointcolor={'#555'} onSubmit={handleSignUp}>
                     <div className="card">
                        <a className="singup">Sign Up</a>
                        <div className="inputBox1">
                           <input
                              type="email"
                              required
                              name="email"
                              value={signUpUser.email}
                              onChange={handleSignUpInput}
                           />
                           <span className="user">Email</span>
                        </div>
                        <div className="inputBox">
                           <input
                              type="text"
                              required
                              name="username"
                              value={signUpUser.username}
                              onChange={handleSignUpInput}
                           />
                           <span>Username</span>
                        </div>
                        <div className="inputBox">
                           <input
                              type="password"
                              required
                              name="pw"
                              value={signUpUser.pw}
                              onChange={handleSignUpInput}
                           />
                           <span>Password</span>
                        </div>
                        <button className="enter">Enter</button>
                     </div>
                  </ToggleForm>
               )}
            </ToggleFormContainer>
         </InnerContainer>
      </>
   );
});

export default Login;
