import React, { memo, useState } from 'react';
import { LoginContainer, InnerContainer } from '../styled/GamilyStyle';

const Login = memo(() => {
   const [isSignUp, setIsSignUp] = useState(false);

   const toggleSignUp = () => {
      setIsSignUp(!isSignUp);
   };

   const formClass = isSignUp ? 'moveup' : '';

   return (
      <LoginContainer>
         <InnerContainer></InnerContainer>
      </LoginContainer>
   );
});

export default Login;
