import React, { memo } from 'react';

const SystemForm = memo(({ searchInterface, sliceName }) => {
   return (
      <form>
         <ul>
            {searchInterface[sliceName]['head'].map((item, idx) => (
               <li key={item}>
                  {item !== 'ID' && <strong>{item}</strong>}
                  {item !== 'ID' && <input type="text" placeholder={searchInterface[sliceName]['body'][idx]} />}
               </li>
            ))}
         </ul>
      </form>
   );
});

export default SystemForm;
