import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Navbar = memo(() => {
   return (
      <nav className="gnb">
         <ul>
            <li>
               <Link to={'/knowledge'}>Knowledge</Link>
            </li>
            <li>
               <Link to={'/adoption'}>Adoption</Link>
            </li>
            <li>
               <Link to={'/community'}>Communication</Link>
            </li>
            <li>
               <Link to={'/store'}>Store</Link>
            </li>
         </ul>
      </nav>
   );
});

export default Navbar;
