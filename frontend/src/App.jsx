import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/common/Layout';
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
import System from './pages/System';
import AddNotice from './pages/AddNotice';
import AnswerQnA from './components/system/AnswerQnA';

const App = () => {
   return (
      <>
         <HashRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/knowledge" element={<Knowledge />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/question">
                     <Route path=":questionId" element={<Question />} />
                  </Route>
                  <Route path="/notice" element={<Notice />} />
                  <Route path="/noticeAdd" element={<AddNotice />} />
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
                  <Route path="/qnaAnswer">
                     <Route path=":qnaAnswerId" element={<AnswerQnA />} />
                  </Route>
                  <Route path="/store" element={<Store />} />
                  <Route path="/product">
                     <Route path=":productId" element={<ProductDetail />} />
                  </Route>
                  <Route path="/adoption" element={<Adoption />} />
                  <Route path="/adoptiondetail">
                     <Route path=":adoptionId" element={<AdoptionDetail />} />
                  </Route>
                  <Route path="/system" element={<System />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/mypage" element={<MyPage />} />
               </Route>
               <Route path="/*" element={<NotFound />} />
            </Routes>
         </HashRouter>
      </>
   );
};

export default App;
