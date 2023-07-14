import React, { memo } from 'react';

const Login = memo(() => {
   return (
      <form>
         <p>
            <label>아이디</label>
            <input type="text" />
         </p>
         <p>
            <label>비밀번호</label>
            <input type="text" />
         </p>
         <button>로그인</button>
      </form>
   );
});

export default Login;
