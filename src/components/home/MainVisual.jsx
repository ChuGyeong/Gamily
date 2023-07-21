import React, { memo } from 'react';
import { MainVisualContainer } from '../../styled/GamilyStyle';

const MainVisual = memo(() => {
   const textList = [
      {
         id: 1,
         text: ['Please be our ', 'family '],
      },
      {
         id: 2,
         text: ['', 'Together ', 'we can make things happen '],
      },
      {
         id: 3,
         text: ['Join us to ', 'change ', 'the world '],
      },
   ];

   return (
      <MainVisualContainer>
         <div className="img-container">
            <div className="img-area"></div>
         </div>
         <div className="animated-title">
            <div className="track">
               {textList.map(item => (
                  <div key={item.id} className="content">
                     {Array(20)
                        .fill()
                        .map((_, repetition) => (
                           <React.Fragment key={`${item.id}-${repetition}`}>
                              {item.text.map((part, index) => (
                                 <React.Fragment key={`${item.id}-${index}`}>
                                    {index === 1 ? <strong>{part}</strong> : part}
                                 </React.Fragment>
                              ))}
                           </React.Fragment>
                        ))}
                  </div>
               ))}
            </div>
         </div>
      </MainVisualContainer>
   );
});

export default MainVisual;
