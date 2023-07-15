import React, { memo, useState } from 'react';
import { InnerContainer } from '../styled/GamilyStyle';

const Login = memo(() => {
   const [isSignUp, setIsSignUp] = useState(false);

   const toggleSignUp = () => {
      setIsSignUp(!isSignUp);
   };

   const formClass = isSignUp ? 'moveup' : '';

   return (
      <>
         <InnerContainer></InnerContainer>
      </>
   );
});

export default Login;
