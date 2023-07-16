import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Knowledge from './pages/Knowledge';
import Commu from './pages/Commu';
import Adoption from './pages/Adoption';
import MyPage from './pages/MyPage';
import Store from './pages/Store';
import Home from './pages/Home';
import AdoptionDetail from './pages/AdoptionDetail';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import Question from './pages/Question';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/knowledge" element={<Knowledge />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/question">
                     <Route path=":questionId" element={<Question />} />
                  </Route>
                  <Route path="/community" element={<Commu />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/product">
                     <Route path=":productId" element={<ProductDetail />} />
                  </Route>
                  <Route path="/adoption" element={<Adoption />} />
                  <Route path="/adoptiondetail">
                     <Route path=":adoptionId" element={<AdoptionDetail />} />
                  </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/mypage" element={<MyPage />} />
               </Route>
               <Route path="/*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
