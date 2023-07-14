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
                  <img src="../../public/images/logo.png" />
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
               <div className="shortcut-box">
                  <strong>Shortcut</strong>
                  <Navbar />
               </div>
               <div className="link-box">
                  <Link to={'/'}>
                     <i className="xi-facebook-official"></i>
                  </Link>
                  <Link to={'/'}>
                     <i className="xi-instagram"></i>
                  </Link>
                  <Link to={'/'}>
                     <i className="xi-twitter"></i>
                  </Link>
                  <Link to={'/'}>
                     <i className="xi-github"></i>
                  </Link>
               </div>
               <div className="familySite-box">
                  <label>FamilySite</label>
                  <select name="" id="" value={familySite} onChange={e => setFamilySite(e.target.value)}>
                     <option value="">select</option>
                     <option value="https://chugyeong.github.io/Ewha/pc/">Ewha</option>
                     <option value="https://chugyeong.github.io/Tamraev/dist/">Tamraev</option>
                  </select>
               </div>
               <div className="newsletter-box">
                  <p>
                     개밀리 온라인 뉴스레터를 통해 더 많은 소식을 받아 보실 수 있습니다.
                     <br />
                     지금 바로 신청해보세요.
                  </p>
                  <button>신청하기</button>
               </div>
            </div>
         </InnerContainer>
      </FooterContainer>
   );
});

export default Footer;
