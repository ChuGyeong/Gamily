import React, { memo, useState } from 'react';
import { InnerContainer, ToggleSwitch, ToggleForm, ToggleFormContainer } from '../styled/GamilyStyle';

const Login = memo(() => {
   const [isChk, setIsChk] = useState(false);

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
                  <ToggleForm bgcolor={'#ffc303'} fontcolor={'#555'} pointcolor={'#fff'}>
                     <div className="card">
                        <a className="singup">Login</a>
                        <div className="inputBox1">
                           <input type="text" required="required" />
                           <span className="user">Email</span>
                        </div>
                        <div className="inputBox">
                           <input type="password" required="required" />
                           <span>Password</span>
                        </div>
                        <button className="enter">Enter</button>
                     </div>
                  </ToggleForm>
               ) : (
                  <ToggleForm bgcolor={'#1c3761'} fontcolor={'#fff'} pointcolor={'#555'}>
                     <div className="card">
                        <a className="singup">Sign Up</a>
                        <div className="inputBox1">
                           <input type="text" required="required" />
                           <span className="user">Email</span>
                        </div>
                        <div className="inputBox">
                           <input type="text" required="required" />
                           <span>Username</span>
                        </div>
                        <div className="inputBox">
                           <input type="password" required="required" />
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
