import React, { memo } from 'react';
import { SystemFormContainer } from '../../styled/GamilyStyle';

const SystemForm = memo(({ searchInterface, sliceName }) => {
   return (
      <SystemFormContainer>
         <h3>add {sliceName}</h3>
         <ul>
            {searchInterface[sliceName]['head'].map((item, idx) => (
               <li key={item}>
                  {item !== 'ID' && <strong>{item}</strong>}
                  {item !== 'ID' && <input type="text" placeholder={searchInterface[sliceName]['body'][idx]} />}
               </li>
            ))}
         </ul>
      </SystemFormContainer>
   );
});

export default SystemForm;
