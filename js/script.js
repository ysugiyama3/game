const questions = [
  {
    question: "A student has trouble accessing [oxford handbook] from their personal laptop from their residential college. They get routed to a 404-error message. But you cannot replicate the problem both from on- and off-campus. What would you suggest the patron does first?",
    choices: ["Reboot the laptop", "Clear browser cache and cookies or use the incognito/private mode", "Request ILL", "Contact IT"],
    correctAnswer: "Clear browser cache and cookies or use the incognito/private mode",
    explanation: "If a user is having trouble accessing online databases or other electronic library resources, one of the first troubleshooting steps is to clear their browser’s cache and cookies. If a user prefers not to clear their browser’s cache and cookies, they can use incognito or private mode as an alternative. Incognito or private mode does not store browsing history, cache, or cookies, so each session starts fresh. For more information, go to https://ask.library.yale.edu/faq/174879",
    questionImage: "question1.png",
    explanationImage: "smaller_images/placeholder.png",
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation: "2 + 2 equals 4.",
    questionImage: "question2.png",
    explanationImage: "explanation2.png",
  },
  // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById("intro").classList.add("hide");
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionContainer = document.getElementById("question");
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("choices");
    const questionImage = document.getElementById("question-image");

    questionContainer.classList.remove("hide");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesContainer.innerHTML = "";
    questionImage.src = questions[currentQuestionIndex].questionImage;

    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement('li');
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => checkAnswer(choice);
      li.appendChild(button);
      choicesContainer.appendChild(li);
    });
  } else {
    showScore();
  }
}

function checkAnswer(answer) {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").classList.add("hide");
  const explanationContainer = document.getElementById("explanation");
  const resultText = document.getElementById("result-text");
  const explanationText = document.getElementById("explanation-text");
  const explanationImage = document.getElementById("explanation-image");

  explanationContainer.classList.remove("hide");
  if (answer === question.correctAnswer) {
    resultText.textContent = "Correct!";
    score++;
  } else {
    resultText.textContent = "Incorrect.";
  }
  explanationText.textContent = question.explanation;
  explanationImage.src = question.explanationImage;
  currentQuestionIndex++;
}

function nextQuestion() {
  document.getElementById("explanation").classList.add("hide");
  showQuestion();
}

function showScore() {
  const scoreContainer = document.getElementById("score");
  const scoreText = document.getElementById("score-text");

  scoreContainer.classList.remove("hide");
  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("score").classList.add("hide");
  startQuiz();
}
