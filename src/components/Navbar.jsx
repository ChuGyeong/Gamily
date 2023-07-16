import React, { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navArr = [
   {
      name: 'Knowledge',
      src: '/knowledge',
      subMenu: [{ name: 'Quiz', src: '/quiz' }],
   },
   { name: 'Adoption', src: '/adoption', subMenu: [] },
   { name: 'Notice', src: '/notice', subMenu: [{ name: 'QnA', src: '/qna' }] },
   { name: 'Store', src: '/store', subMenu: [] },
];

const Navbar = memo(() => {
   const [activeMenu, setActiveMenu] = useState(null);
   const location = useLocation();

   const handleMouseEnter = idx => {
      setActiveMenu(idx);
   };

   const handleMouseLeave = () => {
      setActiveMenu(null);
   };

   return (
      <nav className="gnb">
         <ul className="main-menu">
            {navArr.map((item, idx) => (
               <li
                  key={idx}
                  className={`${location.pathname === item.src ? 'on' : ''}`}
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
