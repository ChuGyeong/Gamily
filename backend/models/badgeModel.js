let badgeTable = [
   { id: 'basic1', name: '기본1단계', img: './images/ranking-basic-1.png' },
   { id: 'basic2', name: '기본2단계', img: './images/ranking-basic-2.png' },
   { id: 'basic3', name: '기본3단계', img: './images/ranking-basic-3.png' },
   { id: 'deepen1', name: '심화1단계', img: './images/ranking-deepen-1.png' },
   { id: 'deepen2', name: '심화2단계', img: './images/ranking-deepen-2.png' },
   { id: 'deepen3', name: '심화3단계', img: './images/ranking-deepen-3.png' },
   { id: 'prize', name: '퀴즈마스터', img: './images/ranking-trophy.png' },
];
let authBadgeTable = [{ id: 1, email: '1@1.com', badgeID: 'basic1' }];
module.exports = { badgeTable, authBadgeTable };
