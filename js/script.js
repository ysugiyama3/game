const questions = [
  {
    topic: "Browser issue",
    question: "A student has trouble accessing [oxford handbook] from their personal laptop from their residential college. They get routed to a 404-error message. But you cannot replicate the problem both from on- and off-campus. What would you suggest the patron does first?",
    choices: ["Reboot the laptop", "Clear browser cache and cookies or use the incognito/private mode", "Request ILL", "Contact IT"],
    correctAnswer: "Clear browser cache and cookies or use the incognito/private mode",
    explanation: "If a user is having trouble accessing online databases or other electronic library resources, one of the first troubleshooting steps is to clear their browser’s cache and cookies. If a user prefers not to clear their browser’s cache and cookies, they can use incognito or private mode as an alternative. Incognito or private mode does not store browsing history, cache, or cookies, so each session starts fresh. For more information, go to https://ask.library.yale.edu/faq/174879",
    questionImage: "smaller_images/question1.png",
    explanationImage: "smaller_images/placeholder.png",
  },
  {
    topic: "Simultaneous user limit",
    question: "A professor has difficulty accessing a French newspaper, Le Monde, though Eureka.cc. But you are not able to replicate the problem. This database is known to be:",
    choices: ["Aggregator database", "Limited to 3 simultaneous users", "Limited to valid NetID holders of Yale University and walk-in users", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Eureka.cc is an aggregator database of Canadian and European newspapers, trade publications, news wires, radio and television program transcripts, websites and blogs, and social media. Access is limited to 3 users at a time. When the user tried to access the resource, the limit may have been reached, and there may have been no available sessions. The problem should be resolved once other users log off.",
    questionImage: "smaller_images/question2.png",
    explanationImage: "explanation2.png",
  },
 {
    topic: "Not starting the search from the library site",
    question: "A graduate student reported that they could not read full-text of the current issue of the Harvard Business Review magazine at https://hbr.org/magazine.",
    choices: ["https://hbr.org is temporarily unavailable due to site upgrade", "Yale does not have access to Harvard Business Review at all", "Yale’s access to the current issue is through Business Source Complete only"],
    correctAnswer: "Yale’s access to the current issue is through Business Source Complete only",
    explanation: "When users know that their institution subscribes to a specific journal. They may go directly to the publisher’s website, such as thelancet.com and hbr.org, rather than starting their search on the library catalog or E-journal A-Z page. Navigating this way from a search engine can cause access problems and confusion. While search engines like Google, Safari, and Bing can find resources, they do not connect the users to the institution’s subscription, often resulting in a paywall. Searches via the library catalog, Journal AZ list, or Articles+ direct users to the appropriate subscription and also provide important information like access method, simultaneous user limit, content coverage, and embargo periods.",
    questionImage: "smaller_images/question3.png",
    explanationImage: "explanation2.png",
  },
 {
    topic: "EZProxy",
    question: "Which is the correct YUL EZProxy prefix?",
    choices: ["https://yale.ezproxy.org/login?url=", "https://yale.oclc.org/login?url=", "https://yale.idm.oclc.org/login?url=", "https://yale.ezproxy.oclc.org/login?url="],
    correctAnswer: "https://yale.idm.oclc.org/login?url=",
    explanation: "The YUL EZProxy Prefix is “https://yale.idm.oclc.org/login?url=.” The prefix is used with a link to a resource that allows remote access through IP authentication.For example, JSTOR (https://yale.idm.oclc.org/login?url=https://www.jstor.org/search). For more information, go to https://guides.library.yale.edu/ezproxy/atyul",
    questionImage: "smaller_images/question4.png",
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
      button.classList.add("button");
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
