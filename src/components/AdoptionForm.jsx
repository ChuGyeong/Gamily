import React, { memo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const AdoptionForm = memo(() => {
   return (
      <form>
         <div className="search-box">
            <input type="text" placeholder="??을 입력하세요" />
            <button>
               <AiOutlineSearch />
            </button>
         </div>
      </form>
   );
});

export default AdoptionForm;
