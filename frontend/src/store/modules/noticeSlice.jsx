import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   data: JSON.parse(localStorage.getItem('noticeData')) || [
      {
         id: 1,
         title: '공지사항을 오픈하였습니다.',
         date: '2023-07-16',
         content: `목숨이 할지라도 우리의 같이, 꽃이 이것이다. 청춘 하는 위하여 용감하고 사는가 인생의 주며, 청춘은 우리의 교향악이다. 하는 속에서 이상의 그들에게 대한 속에 영락과 것이다. 풍부하게 원대하고, 봄바람을 보이는 이는 몸이 말이다. 청춘이 대한 이상의 사라지지 새가 커다란 것이다. 거친 황금시대의 않는 든 같은 끓는 더운지라 하여도 보배를 끓는다. 내려온 품었기 눈이 하여도 봄날의 더운지라 따뜻한 미묘한 것이다. 위하여서 얼음 따뜻한 끓는다. 목숨이 그들의 피어나기 트고, 보는 품으며, 설산에서 사막이다. 속에 피어나기 만물은 그들에게 살았으며, 황금시대다. \n 발휘하기 하는 그와 능히 기관과 말이다. 웅대한 얼음이 이 영락과 쓸쓸한 꽃이 힘있다. 하는 따뜻한 창공에 위하여 모래뿐일 인간에 못하다 광야에서 우리 그리하였는가? 그와 생명을 꽃이 하는 뿐이다. 얼음이 트고, 사랑의 봄바람을 앞이 이것은 같이, 것이다. 용기가 설레는 그것은 소리다.이것은 이것은 찬미를 피어나기 교향악이다. 얼마나 무엇을 황금시대의 방황하여도, 것이다. 동력은 그들의 얼음 오아이스도 같지 과실이 것이다. 그들은 얼음 가지에 그와 있는 그것은 무엇을 무엇이 것이다.\n 주는 밝은 남는 봄바람을 바로 것이다. 것이다.보라, 착목한는 따뜻한 불러 목숨이 사는가 얼마나 아름다우냐? 영원히 구하지 피가 청춘 그들은 것은 그들은 천지는 듣는다. 고행을 같이 대고, 가진 관현악이며, 얼음이 쓸쓸한 그들을 피가 철환하였는가? 청춘에서만 피고 아름답고 무엇이 방황하여도, 전인 밝은 끓는다. 그들의 몸이 무엇을 같이, 어디 싹이 이상은 피가 넣는 그리하였는가? 없으면, 있으며, 그들의 그들은 할지니, 투명하되 위하여 생생하며, 부패를 듣는다. 인생을 우리는 같이 불어 너의 주는 운다. 있는 놀이 인생의 수 그들은 이것이다. 설레는 옷을 않는 만물은 운다. 뜨고, 이성은 그림자는 듣는다.`,
         hits: 5,
      },
   ],
};

let no = JSON.parse(localStorage.getItem('qnaData'))
   ? JSON.parse(localStorage.getItem('qnaData')).reduce((max, current) => {
        return current.id > max ? current.id : max;
     }, 0) + 1
   : initialState.data.length + 1;

export const noticeSlice = createSlice({
   name: 'notice',
   initialState,
   reducers: {
      addNotice(state, action) {
         state.data = [{ id: no++, hits: 0, ...action.payload }, ...state.data];
         localStorage.setItem('noticeData', JSON.stringify(state.data));
      },
   },
});

export const { addNotice } = noticeSlice.actions;
export default noticeSlice.reducer;
