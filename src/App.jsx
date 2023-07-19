import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Knowledge from './pages/Knowledge';
import Notice from './pages/Notice';
import Adoption from './pages/Adoption';
import MyPage from './pages/MyPage';
import Store from './pages/Store';
import Home from './pages/Home';
import AdoptionDetail from './pages/AdoptionDetail';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Quiz from './pages/Quiz';
import Question from './pages/Question';
import QnA from './pages/QnA';
import NoticeDetail from './pages/NoticeDetail';
import AddQnA from './pages/AddQnA';
import EditQnA from './pages/EditQnA';
import MyDogAdoption from './pages/myDogAdoption';

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
                  <Route path="/notice" element={<Notice />} />
                  <Route path="/noticeDetail">
                     <Route path=":noticeId" element={<NoticeDetail />} />
                  </Route>
                  <Route path="/myDogAdoption">
                     <Route path=":myDogId" element={<MyDogAdoption />} />
                  </Route>
                  <Route path="/qna" element={<QnA />} />
                  <Route path="/qnaAdd" element={<AddQnA />} />
                  <Route path="/qnaEdit">
                     <Route path=":qnaEditId" element={<EditQnA />} />
                  </Route>
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
