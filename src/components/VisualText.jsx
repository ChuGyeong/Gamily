import React, { memo } from 'react';
import '../styled/VisualText';

const VisualText = memo(() => {
   return (
      <div>
         <div className="upper-container">
            <h1>HELLO</h1>
         </div>
         <div className="transition">
            <div className="lower-container">
               <div className="div1">Lorem ipsum dolor </div>
               <div className="div2"> sit amet, consectetur </div>
               <div className="div3">adipiscing elit.</div>
            </div>
         </div>
      </div>
   );
});

export default VisualText;
