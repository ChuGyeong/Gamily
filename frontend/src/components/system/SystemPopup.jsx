import React, { memo, useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import SystemForm from './SystemForm';

const cateArr = ['조회', '추가'];

const SystemPopup = memo(({ data, sliceName }) => {
   const [cate, setCate] = useState('조회');
   const selCate = item => {
      setCate(item);
   };
   const clearCate = () => {
      setCate('조회');
   };
   console.log(data, sliceName);

   const [isDetailData, setIsDetailData] = useState(false);

   const searchInterface = {
      notice: {
         head: ['ID', '제목', '내용', '조회수', '작성일'],
         body: ['id', 'title', 'content', 'hits', 'date'],
         col: ['7%', '15%', 'auto', '7%', '7%', '7%', '10%'],
      },
      qna: {
         head: ['ID', '질문', '답변', '유저이름', '이메일', '작성일'],
         body: ['id', 'question', 'answer', 'username', 'email', 'date'],
         col: ['7%', '25.5%', '29.5%', '7%', '7%', '7%', '7%', '10%'],
      },
      auth: {
         head: ['이메일', '유저이름', '가입일'],
         body: ['email', 'username', 'date'],
         col: ['auto', 'auto', 'auto', 'auto'],
      },
      store: {
         head: ['ID', '카테고리', '제품명', '평점', '가격'],
         body: ['id', 'category', 'title', 'rate', 'price'],
         col: ['auto', 'auto', 'auto', 'auto', 'auto', '7%', '10%'],
      },
      adoptionApp: {
         head: ['ID', '이름', '연락처', '우편번호', '주소', '상세주소', '작성일', '서류상태'],
         body: ['id', 'name', 'tel', 'postCode', 'address', 'detailAddress', 'date', 'state'],
         col: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
      },
   };

   return (
      <div className={`popup ${isDetailData ? 'on' : ''}`}>
         <div className="data-area">
            <div className="btn-area">
               {sliceName !== 'qna' ? (
                  cateArr.map(item => (
                     <button key={item} className={cate === item ? 'on' : ''} onClick={() => selCate(item)}>
                        {item}
                     </button>
                  ))
               ) : (
                  <button className="on">조회</button>
               )}
            </div>
            <div className="content">
               {cate === '조회' ? (
                  <SearchBox
                     sliceName={sliceName}
                     data={data}
                     isDetailData={isDetailData}
                     setIsDetailData={setIsDetailData}
                     searchInterface={searchInterface}
                  />
               ) : (
                  <SystemForm searchInterface={searchInterface} sliceName={sliceName} />
               )}
            </div>
         </div>
      </div>
   );
});

export default SystemPopup;
