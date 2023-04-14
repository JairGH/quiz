let questions = [
  {
    numb: 1,
    question: "Commonly used data types do not include:",
    answer: "Alerts",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
  },
  {
    numb: 2,
    question: "The condition in an if/ else statement is enclosed within",
    answer: "Parentheses",
    options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
  },
  {
    numb: 3,
    question: "Arrays in JavaScript can be used to store",
    answer: "All of the above",
    options: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
  },
  {
    numb: 4,
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    answer: "Curly brackets",
    options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
  },
  {
    numb: 5,
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "console.log",
    options: ["JavaScript", "terminal / bash", "for logos", "console.log"],
  },
];

// const startQuiz = document.querySelector(".start_quiz")

function byID(id) {
  return document.getElementById(id)
}

var startScreen = byId("startScreen");
var gameScreen = byId("gameScreen");
var startBtn = byId("startQUiz");

startBtn.addEventListener("click", startQuiz);