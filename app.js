const quiz = [
  {
    question: 'スーパーマリオワールドの主人公は？',
    answers: ['マリオ', 'ルイージ', 'ピーチ', 'クッパ'],
    correct: 'マリオ',
  },
  {
    question: 'フィリピンの現地語は',
    answers: ['韓国語', '中国語', '日本語', 'タガログ語'],
    correct: 'タガログ語',
  },
  {
    question: '京都の女性は',
    answers: ['やさしい', 'つよい', 'かわいい', 'こわい'],
    correct: 'こわい',
  },
  {
    question: '前前前',
    answers: ['世', '輪', '田', '前'],
    correct: '世',
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// ここから正誤判定

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(
      'お疲れ様でした！あなたの正解数は' + score + '/' + quizLength + 'です！'
    );
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
