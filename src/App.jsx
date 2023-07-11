import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Knowledge from './pages/Knowledge';
import Commu from './pages/Commu';
import Adoption from './pages/Adoption';
import MyPage from './pages/MyPage';
import SignUp from './pages/SignUp';
import Store from './pages/Store';
import Home from './pages/Home';
import AdoptionDetail from './pages/AdoptionDetail';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />

                  <Route path="/knowledge" element={<Knowledge />} />
                  <Route path="/community" element={<Commu />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/adoption" element={<Adoption />} />
                  <Route path="/adoptiondetail">
                     <Route path=":adoptionId" element={<AdoptionDetail />} />
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/signUp" element={<SignUp />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
