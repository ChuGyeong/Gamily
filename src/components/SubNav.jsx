import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const SubNav = memo(() => {
   return (
      <nav className="sub-nav">
         <Link to={'/login'}>Login</Link>
         {/* <Link to={'/mypage'}>Mypage</Link> */}
      </nav>
   );
});

export default SubNav;
