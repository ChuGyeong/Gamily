import React, { useState } from 'react';
import { SearchBoxContainer } from '../../styled/GamilyStyle';
import DetailData from './DetailData';
import { useNavigate } from 'react-router-dom';
import { toggleManager } from '../../store/modules/authSlice';

const SearchBox = ({ sliceName, data, isDetailData, setIsDetailData, searchInterface }) => {
   const [detailItem, setDetailItem] = useState(null);
   const openDetailData = item => {
      setDetailItem(item);
      setIsDetailData(true);
   };
   const navigate = useNavigate();

   const isManager = () => {
      dispatch(toggleManager());
   };

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
                        <button onClick={() => openDetailData(item)}>조회</button>
                     </td>
                     <td className="td-btns">
                        {sliceName === 'qna' ? (
                           <button onClick={() => navigate(`/qnaAnswer/${item.id}`)}>답글</button>
                        ) : sliceName === 'auth' ? (
                           <button>관리자 권환 부여</button>
                        ) : (
                           <button>수정</button>
                        )}
                        <button>삭제</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </SearchBoxContainer>
         {isDetailData && (
            <DetailData sliceName={sliceName} detailItem={detailItem} setIsDetailData={setIsDetailData} />
         )}
      </>
   );
};

export default SearchBox;
