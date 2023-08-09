import React, { useEffect, useState } from 'react';
import { SearchBoxContainer } from '../../styled/GamilyStyle';
import DetailData from './DetailData';
import { useNavigate } from 'react-router-dom';
import authSlice, { toggleManager } from '../../store/modules/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = ({ sliceName, data, isDetailData, setIsDetailData, searchInterface }) => {
   const [detailItem, setDetailItem] = useState(null);
   const openDetailData = item => {
      setDetailItem(item);
      setIsDetailData(true);
   };
   const { authData } = useSelector(state => state.authR);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleToggleManager = item => {
      dispatch(toggleManager({ authEmail: item.email }));
   };
   /*    useEffect(() => {
      if (sliceName === 'auth') {
         setData(authData);
      }
   }, [authData]); */

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
                           <button onClick={() => handleToggleManager(item)}>
                              {item.isManager ? '관리자 권환 해제' : '관리자 권환 부여'}
                           </button>
                        ) : sliceName === 'adoptionApp' ? (
                           <>
                              <button>승인</button>
                              <button>거절</button>
                           </>
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
