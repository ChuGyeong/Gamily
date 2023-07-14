import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navArr = [
   { name: 'Knowledge', src: '/knowledge' },
   { name: 'Adoption', src: '/adoption' },
   { name: 'Communication', src: '/community' },
   { name: 'Store', src: '/store' },
];
const Navbar = memo(() => {
   const location = useLocation();
   return (
      <nav className="gnb">
         <ul>
            {navArr.map((item, idx) => (
               <li key={idx} className={location.pathname === item.src ? 'on' : ''}>
                  <Link to={item.src}>{item.name}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
});

export default Navbar;
