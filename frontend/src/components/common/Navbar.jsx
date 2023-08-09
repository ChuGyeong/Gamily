import React, { useState, memo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAuth } from '../../store/modules/authSlice';

const Navbar = memo(() => {
   const [activeMenu, setActiveMenu] = useState(null);
   const location = useLocation();
   const dispatch = useDispatch();
   const { auth, myAuth } = useSelector(state => state.authR);
   const [navArr, setNavArr] = useState([
      {
         name: 'Knowledge',
         src: '/knowledge',
         subMenu: [
            { name: 'Knowledge', src: '/knowledge' },
            { name: 'Quiz', src: '/quiz' },
         ],
      },
      { name: 'Adoption', src: '/adoption', subMenu: [] },
      {
         name: 'Notice',
         src: '/notice',
         subMenu: [
            { name: 'Notice', src: '/notice' },
            { name: 'QnA', src: '/qna' },
         ],
      },
      { name: 'Store', src: '/store', subMenu: [] },
   ]);

   const handleMouseEnter = idx => {
      setActiveMenu(idx);
   };
   const handleMouseLeave = () => {
      setActiveMenu(null);
   };
   useEffect(() => {
      if (auth) dispatch(getMyAuth({ authEmail: auth.email }));
   }, [auth]);
   useEffect(() => {
      if (myAuth?.isManager) {
         if (!navArr.find(item => item.name === 'System')) {
            setNavArr([...navArr, { name: 'System', src: '/system', subMenu: [] }]);
         }
      } else {
         setNavArr(navArr.filter(item => item.name !== 'System'));
      }
   }, [myAuth]);
   return (
      <nav className="gnb">
         <ul className="main-menu">
            {navArr.map((item, idx) => (
               <li
                  key={idx}
                  className={`${
                     location.pathname === item.src || item.subMenu.find(subItem => subItem.src === location.pathname)
                        ? 'on'
                        : ''
                  }`}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}>
                  <Link to={item.src}>{item.name}</Link>
                  {item.subMenu.length > 0 && (
                     <ul className={`sub-menu ${activeMenu === idx ? 'active' : ''}`}>
                        {item.subMenu.map((subMenuItem, subMenuIdx) => (
                           <li key={subMenuIdx} className={`${location.pathname === subMenuItem.src ? 'on' : ''}`}>
                              <Link to={subMenuItem.src}>{subMenuItem.name}</Link>
                           </li>
                        ))}
                     </ul>
                  )}
               </li>
            ))}
         </ul>
      </nav>
   );
});

export default Navbar;
