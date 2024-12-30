// main.js

// Sample questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Gold", "Osmium", "Oganesson"],
    answer: "Oxygen",
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2", "H2"],
    answer: "H2O",
  },

  {
    question: "What is the smallest prime number?",
    choices: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which planet is closest to the sun?",
    choices: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury",
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: "Blue Whale",
  },
  {
    question: "What is the speed of light?",
    choices: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: "300,000 km/s",
  },
];

const questionFIeld = document.querySelector(".questionField");
const optionDiv = document.querySelector(".options");
const nextButton = document.querySelector(".submit");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.disabled = true;
  loadQuestions();
}
startQuiz();

function loadQuestions() {
  nextButton.disabled = true;
  nextButton.innerHTML = "Next";
  questionFIeld.innerText = questions[currentQuestionIndex].question;
  optionDiv.innerHTML = "";
  questions[currentQuestionIndex].choices.forEach((choice) => {
    let button = document.createElement("button");
    button.innerHTML = choice;
    button.classList.add("button");
    button.addEventListener("click", () => {
      checkAnswer(button);
    });
    optionDiv.appendChild(button);
  });

  nextButton.addEventListener("click", nextQuestion);
}
function checkAnswer(button) {
  if (button.innerHTML === questions[currentQuestionIndex].answer) {
    score++;
    button.classList.add("green");
    nextButton.disabled = false;
  } else {
    button.classList.add("red");
    nextButton.disabled = false;
  }
  Array.from(optionDiv.children).forEach((btn) => (btn.disabled = true));
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex = currentQuestionIndex + 1;
    loadQuestions();
  } else if (currentQuestionIndex === questions.length - 1) {
    EndScreen();
  }
}

function EndScreen() {
  if (currentQuestionIndex === questions.length - 1) {
    questionFIeld.innerHTML = `Your score is ${score}`;
    optionDiv.innerHTML = "";
    nextButton.innerHTML = "Restart";
    nextButton.disabled = false;
  }
  nextButton.addEventListener("click", startQuiz);
  return true;
}
