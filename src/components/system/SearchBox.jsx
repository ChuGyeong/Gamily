import React, { useState } from 'react';
import { SearchBoxContainer } from '../../styled/GamilyStyle';
import DetailData from './DetailData';
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

const SearchBox = ({ sliceName, data, isDetailData, setIsDetailData }) => {
   return (
      <>
         <SearchBoxContainer>
            <colgroup>
               {searchInterface[sliceName]['col'].map((item, idx) => (
                  <col key={idx} style={{ width: item }}></col>
               ))}
            </colgroup>
            <thead>
               <tr>
                  {searchInterface[sliceName]['head'].map((item, idx) => (
                     <th key={idx}>{item}</th>
                  ))}
                  <th>상세보기</th>
                  <th>도구</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item, idx) => (
                  <tr key={idx}>
                     {searchInterface[sliceName]['body'].map((tdItem, idx) => (
                        <td key={idx} className={sliceName}>
                           {item[tdItem]}
                        </td>
                     ))}
                     <td>
                        <button onClick={() => setIsDetailData(true)}>조회</button>
                     </td>
                     <td className="td-btns">
                        {sliceName === 'qna' ? <button>답글</button> : <button>수정</button>}
                        <button>삭제</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </SearchBoxContainer>
         {isDetailData && <DetailData sliceName={sliceName} />}
      </>
   );
};

export default SearchBox;
