// 変数
let unko = 'Hello World';

// unko = 'Hello World2';

// 定数
const bigUnko = 'HE...HE..Helli World';

console.log(bigUnko);

// 配列

const inoki = ['いーち', 'にー', 'さーん', 'だー'];

// console.log(inoki[2]);

// ループ文

// let index = 0;
// while (index < inoki.length) {
//   console.log(inoki[index]);
//   index++;
// }

// if else

// if (inoki.length > 5) {
//   console.log('ぼんばいえ');
// } else {
//   console.log('ぼん...');
// }

// 関数

const test = (arg) => {
  if (inoki.length > arg) {
    console.log('ぼんばいえ');
  } else {
    console.log('ぼん...');
  }
};

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello World');
  },
};

console.log(unko2);

// ドキュメント
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('Hello わーるど');
});
