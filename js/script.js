const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris",
        explanation: "Paris is the capital and most populous city of France.",
        questionImage: "question1.png",
        explanationImage: "explanation1.png"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4",
        explanation: "2 + 2 equals 4.",
        questionImage: "question2.png",
        explanationImage: "explanation2.png"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const introElement = document.getElementById('intro');
    if (introElement) introElement.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionContainer = document.getElementById('question');
        const questionText = document.getElementById('question-text');
        const choicesContainer = document.getElementById('choices');
        const questionImage = document.getElementById('question-image');

        if (questionContainer) questionContainer.classList.remove('hide');
        if (questionText) questionText.textContent = questions[currentQuestionIndex].question;
        if (choicesContainer) choicesContainer.innerHTML = "";
        if (questionImage) questionImage.src = questions[currentQuestionIndex].questionImage;

        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            button.addEventListener('click', () => checkAnswer(choice));
            li.appendChild(button);
            if (choicesContainer) choicesContainer.appendChild(li);
        });
    } else {
        showScore();
    }
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question');
    if (questionContainer) questionContainer.classList.add('hide');
    
    const explanationContainer = document.getElementById('explanation');
    const resultText = document.getElementById('result-text');
    const explanationText = document.getElementById('explanation-text');
    const explanationImage = document.getElementById('explanation-image');

    if (explanationContainer) explanationContainer.classList.remove('hide');
    if (resultText) resultText.textContent = (answer === question.correctAnswer) ? "Correct!" : "Incorrect.";
    if (answer === question.correctAnswer) score++;

    if (explanationText) explanationText.textContent = question.explanation;
    if (explanationImage) explanationImage.src = question.explanationImage;
    currentQuestionIndex++;
}

function nextQuestion() {
    const explanationContainer = document.getElementById('explanation');
    if (explanationContainer) explanationContainer.classList.add('hide');
    showQuestion();
}

function showScore() {
    const scoreContainer = document.getElementById('score');
    const scoreText = document.getElementById('score-text');

    if (scoreContainer) scoreContainer.classList.remove('hide');
    if (scoreText) scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    const scoreContainer = document.getElementById('score');
    if (scoreContainer) scoreContainer.classList.add('hide');
    startQuiz();
}

// Ensure to start the quiz when the content is loaded
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
    if (startButton) startButton.addEventListener('click', startQuiz);
    const nextButton = document.getElementById('next-button');
    if (nextButton) nextButton.addEventListener('click', nextQuestion);
    const restartButton = document.getElementById('restart-button');
    if (restartButton) restartButton.addEventListener('click', restartQuiz);
});