import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubNav = memo(() => {
   const { auth } = useSelector(state => state.authR);
   return <nav className="sub-nav">{auth ? <Link to={'/mypage'}>Mypage</Link> : <Link to={'/login'}>Login</Link>}</nav>;
});

export default SubNav;
