const startBtn = document.getElementById('start-btn');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const scoreSpan = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    answer: 1,
  },
  {
    question: "Which HTML element is used to define the largest heading?",
    options: ["<head>", "<h1>", "<header>", "<h6>"],
    answer: 1,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: 2,
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["background", "color", "background-color", "bgcolor"],
    answer: 2,
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    options: ["<script>", "<link>", "<js>", "<src>"],
    answer: 0,
  },
  {
    question: "What does the 'var' keyword do in JavaScript?",
    options: [
      "Declares a function",
      "Declares a variable",
      "Declares a constant",
      "None of the above"
    ],
    answer: 1,
  },
  {
    question: "Which JavaScript method is used to write into an alert box?",
    options: ["alert()", "prompt()", "console.log()", "write()"],
    answer: 0,
  },
  {
    question: "Which of the following is used to style a webpage?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1,
  },
  {
    question: "Which symbol is used to select an ID in CSS?",
    options: ["#", ".", "@", "&"],
    answer: 0,
  },
  {
    question: "Which HTML element is used to embed an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  startBtn.parentElement.classList.add('hidden');
  questionScreen.classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-btn');
    btn.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].answer;
  if (selectedIndex === correctIndex) {
    score++;
  }
  nextBtn.classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextBtn.classList.add('hidden');
  } else {
    showResult();
  }
}

function showResult() {
  questionScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  scoreSpan.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add('hidden');
  startBtn.parentElement.classList.remove('hidden');
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
