import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   data: JSON.parse(localStorage.getItem('qnaData')) || [
      {
         id: 1,
         title: 'This is first question.',
         username: '정정종우',
         email: 'testtest3@test3.com',
         date: '2023-07-17',
         question:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
         answer: '',
      },
      {
         id: 2,
         title: 'This is second question.',
         username: '푸푸푸푸린푸푸린',
         email: 'testtest4@test4.com',
         date: '2023-07-17',
         question:
            '있는 천자만홍이 위하여 같이, 가치를 영락과 그리하였는가? 열매를 이상을 간에 그것은 찬미를 그들은 많이 피가 영원히 칼이다. 우리는 피가 품고 새 영락과 얼마나 얼음 아니다.',
         answer: '',
      },
      {
         id: 3,
         title: ' This is third question.',
         username: '홍길동',
         email: 'testtest5@test5.com',
         date: '2023-07-17',
         question:
            '이상의 용기가 때까지 인간의 풍부하게 없으면, 고동을 바로 넣는 아름다우냐? 설산에서 찾아다녀도, 피부가 없으면, 이것이다. 우리 노년에게서 위하여, 동산에는 그들의 청춘은 아름다우냐? 것이 관현악이며, 찬미를 싸인 가지에 들어 일월과 아름다우냐? 봄날의 관현악이며, 대중을 힘있다. 못하다 청춘 반짝이는 석가는 피고, 위하여서 끓는 역사를 칼이다. 그들은 가장 그들에게 실현에 전인 커다란 과실이 무엇이 만물은 있다. 인도하겠다는 가치를 거친 예수는 든 그들은 칼이다. 지혜는 든 소리다.이것은 같이, 위하여서 것이다. 인생의 인간의 있음으로써 현저하게 이상의 피다. 피어나기 기쁘며, 청춘의 우리 얼음과 풀밭에 아니다. 인간의 대고, 않는 웅대한 붙잡아 위하여 이상이 보라. 눈에 얼마나 싶이 피부가 것이다. 목숨이 이상 온갖 있다. 봄바람을 끝까지 보내는 그들의 피어나는 피고 찬미를 불어 것이다. 희망의 피고 위하여 것이다. 날카로우나 스며들어 청춘 있으며, 가장 같이 천하를 바이며, 사막이다. 무엇을 하여도 천하를 부패를 것이다. 힘차게 관현악이며, 부패를 보는 새 하여도 끓는다. 미묘한 온갖 소금이라 이성은 천지는 곧 힘있다. 힘차게 싹이 아름답고 별과 가는 스며들어 찬미를 무엇이 뿐이다. 스며들어 놀이 있을 인간의 것은 불러 칼이다. 청춘에서만 그들의 청춘의 뜨거운지라, 불러 인간의 보배를 것이다. 물방아 같은 인간이 방황하여도, 이상은 밝은 이것이다. 대중을 노래하며 맺어, 불어 오아이스도 가슴에 봄바람이다. 위하여, 예가 대한 꽃 풍부하게 소리다.이것은 사랑의 얼음이 피다. 놀이 인생의 못하다 어디 불러 봄바람이다. 같으며, 같이 못하다 부패뿐이다. 인생을 무엇이 것은 사는가 것은 갑 것이다.',
         answer: '',
      },
   ],
};

let no = JSON.parse(localStorage.getItem('qnaData'))
   ? JSON.parse(localStorage.getItem('qnaData')).reduce((max, current) => {
        return current.id > max ? current.id : max;
     }, 0) + 1
   : initialState.data.length + 1;

export const qnaSlice = createSlice({
   name: 'qna',
   initialState,
   reducers: {
      addQuestion(state, action) {
         state.data = [...state.data, { id: no++, ...action.payload }];
         localStorage.setItem('qnaData', JSON.stringify(state.data));
      },
      editQuestion(state, action) {
         state.data = state.data.map(item => (item.id === action.payload.id ? action.payload : item));
         localStorage.setItem('qnaData', JSON.stringify(state.data));
      },
      delQuestion(state, action) {
         state.data = state.data.filter(item => item.id !== action.payload);
         localStorage.setItem('qnaData', JSON.stringify(state.data));
      },
   },
});

export const { addQuestion, editQuestion, delQuestion } = qnaSlice.actions;
export default qnaSlice.reducer;
