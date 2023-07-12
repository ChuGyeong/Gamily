import React, { memo, useEffect, useState } from 'react';
import { FooterContainer, InnerContainer } from '../styled/GamilyStyle';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Footer = memo(() => {
   const [familySite, setFamilySite] = useState('');
   useEffect(() => {
      if (familySite) window.open(familySite, '_blank');
   }, [familySite]);
   return (
      <FooterContainer>
         <InnerContainer>
            <h2>
               <Link to={'/'}>
                  <img src="../../public/images/logo-removebg.png" />
               </Link>
            </h2>
            <div className="box-continer">
               <div className="info-box">
                  <strong>Github</strong>
                  <span>
                     <a href="https://github.com/ChuGyeong" target="_blank">
                        ChuGyeong Github
                     </a>
                  </span>
                  <span>
                     <a href="https://github.com/honeypunch97" target="_blank">
                        Jongwoo Github
                     </a>
                  </span>
               </div>
               <div className="link-box">
                  <strong>Shortcut</strong>
                  <Navbar />
                  <label>FamilySite</label>
                  <select name="" id="" value={familySite} onChange={e => setFamilySite(e.target.value)}>
                     <option value="">select</option>
                     <option value="https://chugyeong.github.io/Ewha/pc/">Ewha</option>
                     <option value="https://chugyeong.github.io/Tamraev/dist/">Tamraev</option>
                  </select>
               </div>
            </div>
         </InnerContainer>
      </FooterContainer>
   );
});

export default Footer;
