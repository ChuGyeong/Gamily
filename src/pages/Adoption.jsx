import React, { memo, useEffect } from 'react';
import { AdoptionContainer, InnerContainer } from '../styled/GamilyStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptions } from '../store/modules/adoptionSlice';
import AdoptionList from '../components/AdoptionList';
import AdoptionForm from '../components/AdoptionForm';

const Adoption = memo(() => {
   const { data, state } = useSelector(state => state.adoptionsR);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getAdoptions());
   }, []);
   return (
      <AdoptionContainer>
         <InnerContainer>
            <h2>Adoption</h2>
            <AdoptionForm />
            {state === 'fulfilled' && <AdoptionList data={data} />}
         </InnerContainer>
      </AdoptionContainer>
   );
});

export default Adoption;
