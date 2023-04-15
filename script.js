// const startQuiz = document.querySelector(".start_quiz")

function byId(id) {
  return document.getElementById(id);
}

var timeLeft = 60;
var startScreen = byId("startScreen");
var gameScreen = byId("gameScreen");
var startBtn = byId("startQuiz");
var question = byId("question");
var ans1 = byId("ans1");
var ans2 = byId("ans2");
var ans3 = byId("ans3");
var ans4 = byId("ans4");
var ans5 = byId("ans5");
var feedBack = byId("feedBack");
var endScreen = byId("endScreen");
var submitInitials = byId("submitInitials");

var questionIndex = 0;
var questions = [
  {
    question: "Commonly used data types do not include:",
    ans1: "Strings",
    ans2: "Booleans",
    ans3: "Alerts",
    ans4: "Numbers",
    correct: "Alerts",
  },
  {
    question: "The condition in an if/ else statement is enclosed within",
    ans1: "Quotes",
    ans2: "Curly Brackets",
    ans3: "Parenthesis",
    ans4: "Brackets",
    correct: "Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store",
    ans1: "Numbers and strings",
    ans2: "Other arrays",
    ans3: "Booleans",
    ans4: "All of the above",
    correct: "All of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    ans1: "Commas",
    ans2: "Curly brackets",
    ans3: "Quotes",
    ans4: "Parentheses",
    correct: "Curly brackets",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    ans1: "JavaScript",
    ans2: "terminal / bash",
    ans3: "for logos",
    ans4: "console.log",
    correct: "console.log"
  },
];

function startQuiz() {
  startScreen.classList.toggle("hide");
  gameScreen.classList.toggle("hide");

  displayQuestion();
}

// startBtn.addEventListener("click", startQuiz);

function displayQuestion() {
  var currentQuestion = questions[questionIndex];

  if (!currentQuestion) {
    endQuiz();
    return
  }

  question.textContent = currentQuestion.question;
  ans1.textContent = currentQuestion.ans1;
  ans2.textContent = currentQuestion.ans2;
  ans3.textContent = currentQuestion.ans3;
  ans4.textContent = currentQuestion.ans4;
}

function endQuiz() {
  gameScreen.classList.toggle("hide");
}

function checkAnswer(event) {
  console.log(event.target.textContent);

  if (event.target.textContent === questions[questionIndex].correct) {
    console.log("Right");
    feedBack.textContent = " Yes sirrrr!!! ";
    feedBack.style.backgroundColor = "green";
  } else {
    console.log("Wrong");
    timeLeft -= 10;
    feedBack.textContent = " Ups! ";
    feedBack.style.backgroundColor = "red";
  }
  setTimeout(function () {
    feedBack.textContent = "";
    feedBack.style.backgroundColor = "";
    questionIndex++;
  }, 1000);
}

function submitScore() {
  var savedScores = JSON.parse(localStorage.getItem("scores")) || []
  var scoreObj = {
    name: submitInitials.ariaValueMax,
    score: timeLeft,
  };
  savedScores.push(scoreObj);
  localStorage.setItem("", JSON.stringify(savedScores));
}

function displayScores() {}

startBtn.addEventListener("click", startQuiz);
ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);
submitInitials.addEventListener("click", submitScore);
