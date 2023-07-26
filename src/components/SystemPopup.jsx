import React, { memo } from 'react';

const SystemPopup = memo(({ setIsPopUp, data }) => {
   return (
      <div className="popup">
         <button className="close" onClick={() => setIsPopUp(false)}>
            <i className="xi-close"></i>
         </button>
         <div className="data-area">
            <div className="btn-area">
               <button>추가</button>
               <button>삭제</button>
               <button>수정</button>
            </div>
            <div className="list">
               <ul></ul>
            </div>
         </div>
      </div>
   );
});

export default SystemPopup;
